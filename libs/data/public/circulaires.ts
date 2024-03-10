"use server";

import prisma from "../../utils/prisma";

export async function fetchOneCirculaireBySlug(slug: string) {
  try {
    const circulaire = await prisma.circulaire.findUnique({
      where: {
        slug,
      },
      include: {
        articles: true,
      },
    });
    return circulaire;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch circulaire.");
  }
}
