"use server";

import prisma from "../../utils/prisma";
import { Publication } from "../../utils/definitions";

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredPublication(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchString = `%${query}%`;

  try {
    // Using direct query to convert numbers to string for insensitive search
    const publications = await prisma.$queryRaw<Publication[]>`
        SELECT * FROM publication
        WHERE
          title LIKE ${searchString} OR
          author LIKE ${searchString} OR
          year LIKE ${searchString} OR
          journal LIKE ${searchString} OR
          book_citation LIKE ${searchString} OR
          volume LIKE ${searchString} OR
          number LIKE ${searchString} OR
          editor LIKE ${searchString} OR
          additional_comments LIKE ${searchString}
        ORDER BY author ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return publications;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch publications.");
  }
}

export async function fetchPublicationPages(query: string) {
  const searchString = `%${query}%`;

  try {
    const totalResults: { count: string }[] = await prisma.$queryRaw`
        SELECT COUNT(*) as count
        FROM publication
        WHERE
        title LIKE ${searchString} OR
          author LIKE ${searchString} OR
          year LIKE ${searchString} OR
          journal LIKE ${searchString} OR
          book_citation LIKE ${searchString} OR
          volume LIKE ${searchString} OR
          number LIKE ${searchString} OR
          editor LIKE ${searchString} OR
          additional_comments LIKE ${searchString}
      `;

    const totalPages = Math.ceil(
      parseInt(totalResults[0].count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of publications.");
  }
}
