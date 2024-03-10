"use server";

import prisma from "../../utils/prisma";
import { Odonate } from "../../utils/definitions";

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredOdonate(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchString = `%${query}%`;

  try {
    // Using direct query to convert numbers to string for insensitive search
    const odonates = await prisma.$queryRaw<Odonate[]>`
        SELECT * FROM odonate
        WHERE
        scientific_name LIKE ${searchString} OR
        author_and_year LIKE ${searchString} OR
        french_name LIKE ${searchString} OR
        suborder LIKE ${searchString} OR
        family LIKE ${searchString}
        ORDER BY scientific_name ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return odonates;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch odonates.");
  }
}

export async function fetchOdonatePages(query: string) {
  const searchString = `%${query}%`;

  try {
    const totalResults: { count: string }[] = await prisma.$queryRaw`
        SELECT COUNT(*) as count
        FROM odonate
        WHERE
        scientific_name LIKE ${searchString} OR
        author_and_year LIKE ${searchString} OR
        french_name LIKE ${searchString} OR
        suborder LIKE ${searchString} OR
        family LIKE ${searchString}
      `;

    const totalPages = Math.ceil(
      parseInt(totalResults[0].count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of odonate.");
  }
}
