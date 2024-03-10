"use server";

import { Prisma } from "@prisma/client";
import { User } from "../../utils/definitions";
import prisma from "../../utils/prisma";
const bcrypt = require("bcrypt");

const ITEMS_PER_PAGE = 10;

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchOneUser(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchFilteredUser(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchString = `%${query}%`;

  try {
    // Using direct query to convert numbers to string for insensitive search
    const users = await prisma.$queryRaw<User[]>`
        SELECT * FROM user
        WHERE
          name LIKE ${searchString} OR
          email LIKE ${searchString}
        ORDER BY id ASC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;

    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchUserPages(query: string) {
  const searchString = `%${query}%`;

  try {
    const totalResults: { count: string }[] = await prisma.$queryRaw`
        SELECT COUNT(*) as count
        FROM user
        WHERE
          name LIKE ${searchString} OR
          email LIKE ${searchString}
      `;

    const totalPages = Math.ceil(
      parseInt(totalResults[0].count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

export async function deleteUser(id: number) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    console.log("User deleted :", user);
  } catch (error) {
    console.error("Something went wront while deleting User :", error);
    throw error;
  }
}

export async function updateDbUser(
  id: number,
  name: string,
  email: string,
  password: string,
  role: number
) {
  try {
    if (!id || !name.trim() || !email.trim() || role == null) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }
    let data: { name: string; email: string; role: number; password?: string } =
      {
        name,
        email,
        role,
      };
    if (password.trim()) {
      if (password.length < 6) {
        throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      data.password = hashedPassword;
    }
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });

    console.log("User updated :", updatedUser);
  } catch (error) {
    console.error("Something went wront while updating user :", error);
    throw error;
  }
}

export async function addUser(
  name: string,
  email: string,
  password: string,
  role: number
) {
  try {
    if (!name.trim() || !email.trim() || !password.trim() || role == null) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    if (password.length < 6) {
      throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    console.log("New User added :", newUser);
  } catch (error) {
    console.error("Something went wront while adding User :", error);
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Un utilisateur avec cet e-mail existe déjà.");
    }
    throw error;
  }
}
