"use server";

import prisma from "../../utils/prisma";

export async function fetchDepartmentSections(slug: string) {
  try {
    const sections = await prisma.departmentSection.findMany({
      where: { department_slug: slug },
      orderBy: { position: "asc" },
    });
    return sections;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch department sections.");
  }
}
