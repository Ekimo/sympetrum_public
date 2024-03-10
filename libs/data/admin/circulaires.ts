"use server";

import slugify from "slugify";
import prisma from "../../utils/prisma";
import { Prisma } from "@prisma/client";

const customOptions = {
  lower: true,
  replacement: "-",
  remove: /[*+~.()'"!:@/]/g,
};

export async function fetchAllCirculaires() {
  try {
    const circulaires = await prisma.circulaire.findMany();

    return circulaires;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch circulaires.");
  }
}

export async function createDbCirculaire(
  title: string,
  articles: { id: number }[]
) {
  try {
    if (!title.trim() || articles.length < 1) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    if (title.trim().length >= 60) {
      throw new Error("Titre trop long");
    }

    const slug = slugify(title, customOptions);
    const createdCirculaire = await prisma.circulaire.create({
      data: {
        title,
        slug,
        articles: {
          connect: articles,
        },
      },
    });

    console.log("Circulaire created :", createdCirculaire);
    return createdCirculaire.slug;
  } catch (error) {
    console.error("Something went wront while creating Circulaire :", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Ce titre de circulaire existe déjà.");
    }
    throw error;
  }
}
