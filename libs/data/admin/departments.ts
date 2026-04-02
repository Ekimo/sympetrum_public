"use server";

import prisma from "../../utils/prisma";

export async function fetchAllDepartmentSections(slug: string) {
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

export async function fetchOneDepartmentSection(id: number) {
  try {
    const section = await prisma.departmentSection.findUnique({
      where: { id },
    });
    return section;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch department section.");
  }
}

export async function getNextPosition(slug: string) {
  try {
    const result = await prisma.departmentSection.aggregate({
      where: { department_slug: slug },
      _max: { position: true },
    });
    return (result._max.position ?? -1) + 1;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to get next position.");
  }
}

export async function createDbDepartmentSection(data: {
  department_slug: string;
  position: number;
  title: string;
  content: string;
  image_url: string;
  image_alt: string;
  image_credit: string;
}) {
  try {
    const section = await prisma.departmentSection.create({ data });
    console.log("Department section created:", section.id);
    return section;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create department section.");
  }
}

export async function updateDbDepartmentSection(
  id: number,
  data: {
    title: string;
    content: string;
    image_url: string;
    image_alt: string;
    image_credit: string;
  }
) {
  try {
    const section = await prisma.departmentSection.update({
      where: { id },
      data,
    });
    console.log("Department section updated:", section.id);
    return section;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to update department section.");
  }
}

export async function deleteDbDepartmentSection(id: number) {
  try {
    const section = await prisma.departmentSection.delete({ where: { id } });
    console.log("Department section deleted:", section.id);
    return section;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete department section.");
  }
}

export async function reorderDbDepartmentSections(
  updates: { id: number; position: number }[]
) {
  try {
    await prisma.$transaction(
      updates.map((u) =>
        prisma.departmentSection.update({
          where: { id: u.id },
          data: { position: u.position },
        })
      )
    );
    console.log("Department sections reordered:", updates.length);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to reorder department sections.");
  }
}
