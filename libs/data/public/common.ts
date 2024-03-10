"use server";

import prisma from "../../utils/prisma";
import { Prisma } from "@prisma/client";

export async function fetchFacts() {
  try {
    const facts = await prisma.setting.findFirst();
    return facts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch facts.");
  }
}

export async function addDbUserToNewsletter(email: string) {
  try {
    if (!email.trim()) {
      throw new Error("Merci d'entrer une adresse email.");
    }
    const newEmail = await prisma.newsletter.create({
      data: {
        email,
      },
    });

    console.log("New email added :", newEmail);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Cette adresse email est déjà enregistrée.");
    }
    throw error;
  }
}

export async function fetchNewsletterEmail() {
  try {
    const emails = await prisma.newsletter.findMany();
    return emails;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch newsletter emails.");
  }
}
