"use server";

import prisma from "../../utils/prisma";

export async function addOdonate(
  scientific_name: string,
  author_and_year: string,
  french_name: string,
  suborder: string,
  family: string,
  link: string
) {
  try {
    if (
      !scientific_name.trim() ||
      !author_and_year.trim() ||
      !french_name.trim() ||
      !suborder.trim() ||
      !family.trim()
    ) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    const newOdonate = await prisma.odonate.create({
      data: {
        scientific_name,
        author_and_year,
        french_name,
        suborder,
        family,
        link,
      },
    });

    console.log("New Odonate added :", newOdonate);
  } catch (error) {
    console.error("Something went wront while adding Odonate :", error);
    throw error;
  }
}

export async function deleteOdonate(id: number) {
  try {
    const odonate = await prisma.odonate.delete({
      where: {
        id: id,
      },
    });

    console.log("Odonate deleted :", odonate);
  } catch (error) {
    console.error("Something went wront while deleting Odonate :", error);
    throw error;
  }
}

export async function fetchOneOdonate(id: number) {
  try {
    const odonate = await prisma.odonate.findUnique({
      where: {
        id: id,
      },
    });
    return odonate;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch odonate.");
  }
}

export async function updateDbOdonate(
  id: number,
  scientific_name: string,
  author_and_year: string,
  french_name: string,
  suborder: string,
  family: string,
  link: string
) {
  try {
    if (
      !id ||
      !scientific_name.trim() ||
      !author_and_year.trim() ||
      !french_name.trim() ||
      !suborder.trim() ||
      !family.trim()
    ) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }
    const updatedOdonate = await prisma.odonate.update({
      where: {
        id: id,
      },
      data: {
        scientific_name,
        author_and_year,
        french_name,
        suborder,
        family,
        link,
      },
    });

    console.log("Odonate updated :", updatedOdonate);
  } catch (error) {
    console.error("Something went wront while updating odonate :", error);
    throw error;
  }
}
