"use server";

import prisma from "../../utils/prisma";

export async function addPublication(
  title: string,
  author: string,
  year: string,
  journal: string,
  book_citation: string,
  volume: string,
  number: string,
  editor: string,
  additional_comments: string,
  link: string
) {
  try {
    const newPublication = await prisma.publication.create({
      data: {
        title,
        author,
        year,
        journal,
        book_citation,
        volume,
        number,
        editor,
        additional_comments,
        link,
      },
    });

    console.log("New Publication added :", newPublication);
  } catch (error) {
    console.error("Something went wront while adding Publication :", error);
    throw error;
  }
}

export async function deletePublication(id: number) {
  try {
    const publication = await prisma.publication.delete({
      where: {
        id: id,
      },
    });

    console.log("Odonate deleted :", publication);
  } catch (error) {
    console.error("Something went wront while deleting Odonate :", error);
    throw error;
  }
}

export async function fetchOnePublication(id: number) {
  try {
    const publication = await prisma.publication.findUnique({
      where: {
        id: id,
      },
    });
    return publication;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch publication.");
  }
}

export async function updateDbPublication(
  id: number,
  title: string,
  author: string,
  year: string,
  journal: string,
  book_citation: string,
  volume: string,
  number: string,
  editor: string,
  additional_comments: string,
  link: string
) {
  try {
    const updatedPublication = await prisma.publication.update({
      where: {
        id: id,
      },
      data: {
        title,
        author,
        year,
        journal,
        book_citation,
        volume,
        number,
        editor,
        additional_comments,
        link,
      },
    });

    console.log("Publication updated :", updatedPublication);
  } catch (error) {
    console.error("Something went wront while updating publication :", error);
    throw error;
  }
}
