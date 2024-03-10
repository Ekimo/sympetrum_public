import slugify from "slugify";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import {
  createPresignedUrlWithClient,
  getPublicUrl,
} from "../../../../libs/utils/s3";
import axios from "axios";

const customOptions = {
  lower: true,
  replacement: "-",
  remove: /[*+~.()'"!:@]/g,
};

async function uploadToS3(buffer: Buffer, mimeType: string, fileName: string) {
  const key = `mediatheque/${fileName}`;
  const url = (await createPresignedUrlWithClient(key)) || "";

  try {
    await axios.put(url, buffer, {
      headers: {
        "Content-Type": mimeType,
      },
    });
    return getPublicUrl(key);
  } catch (error) {
    console.error("Erreur lors de l'upload sur S3: ", error);
    throw new Error("Erreur lors de l'upload sur S3");
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title");
    const file = formData.get("file");

    if (
      !file ||
      typeof file !== "object" ||
      !file.type ||
      !file.size ||
      !title
    ) {
      return NextResponse.json(
        { error: "Données requises manquantes" },
        { status: 400 }
      );
    }

    if (file.type !== "application/pdf" && !file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Type de fichier non pris en charge" },
        { status: 400 }
      );
    }

    const fileSizeInMB = file.size / 1024 / 1024;
    const maxFileSize = file.type === "application/pdf" ? 5 : 1;

    if (fileSizeInMB > maxFileSize) {
      return NextResponse.json(
        { error: `Taille maximale du fichier : ${maxFileSize} Mo` },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const slug = slugify(title.toString(), customOptions);
    const fileExtension = file.type === "application/pdf" ? ".pdf" : ".webp";
    const newFileName = `${slug}-${uniqueSuffix}${fileExtension}`;

    if (file.type === "application/pdf") {
      const awsURL = await uploadToS3(buffer, "application/pdf", newFileName);
      return NextResponse.json({ fileUrl: awsURL, fileType: "PDF" });
    }

    const compressedImageBuffer = await sharp(buffer)
      .webp({ quality: 100 })
      .toBuffer();
    const awsURL = await uploadToS3(
      compressedImageBuffer,
      "image/webp",
      newFileName
    );
    return NextResponse.json({
      fileUrl: awsURL,
      fileType: "IMAGE",
    });
  } catch (error) {
    console.error("Erreur lors de l'upload du fichier: ", error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload du fichier." },
      { status: 500 }
    );
  }
}
