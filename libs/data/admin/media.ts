"use server";

import prisma from "../../utils/prisma";
import { Media } from "../../utils/definitions";

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredMedia(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchString = `%${query}%`;

  try {
    // Using direct query to convert numbers to string for insensitive search
    const medias = await prisma.$queryRaw<Media[]>`
        SELECT * FROM media
        WHERE
          title LIKE ${searchString} OR
          type LIKE ${searchString} OR
          url LIKE ${searchString}
        ORDER BY id DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return medias;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch medias.");
  }
}

export async function fetchMediaPages(query: string) {
  const searchString = `%${query}%`;

  try {
    const totalResults: { count: string }[] = await prisma.$queryRaw`
        SELECT COUNT(*) as count
        FROM media
        WHERE
          title LIKE ${searchString} OR
          type LIKE ${searchString} OR
          url LIKE ${searchString}
      `;

    const totalPages = Math.ceil(
      parseInt(totalResults[0].count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of medias.");
  }
}

export async function addMedia(
  title: string,
  fileUrl: string,
  fileType: string
) {
  try {
    if (!title.trim() || !fileUrl.trim() || !fileType.trim()) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    const newMedia = await prisma.media.create({
      data: {
        title,
        url: fileUrl,
        type: fileType,
      },
    });

    console.log("New Media added :", newMedia);
  } catch (error) {
    console.error("Something went wront while adding Media :", error);
    throw error;
  }
}
