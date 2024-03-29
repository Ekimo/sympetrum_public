"use server";

import prisma from "../../utils/prisma";
import slugify from "slugify";
import { ArticleWithCategoryName } from "../../utils/definitions";

const customOptions = {
  lower: true,
  replacement: "-",
  remove: /[*+~.()'"!:@?\/\[\],{}=<>;`^%$#|\\&\s]/g,
};

const ITEMS_PER_PAGE = 20;

export async function fetchFilteredArticle(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchString = `%${query}%`;

  try {
    // Using direct query to convert numbers to string for insensitive search
    const articles = await prisma.$queryRaw<ArticleWithCategoryName[]>`
      SELECT 
        article.*, 
        category.id as category_id, 
        category.name as category_name, 
        category.slug as category_slug
      FROM 
        article
      INNER JOIN 
        category ON article.category_id = category.id
      WHERE 
        article.visible = true AND
        (article.title LIKE ${searchString} OR 
        article.intro LIKE ${searchString} OR 
        article.content LIKE ${searchString})
      ORDER BY 
        article.id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return articles.map((article) => {
      return {
        ...article,
        category: {
          id: article.category_id,
          name: article.category_name,
          slug: article.category_slug,
        },
      };
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}

export async function fetchArticlePages(query: string) {
  const searchString = `%${query}%`;

  try {
    const totalResults: { count: string }[] = await prisma.$queryRaw`
        SELECT COUNT(*) as count
        FROM article
        WHERE
          article.visible = true AND
          (title LIKE ${searchString} OR
          intro LIKE ${searchString} OR
          content LIKE ${searchString})
      `;

    const totalPages = Math.ceil(
      parseInt(totalResults[0].count) / ITEMS_PER_PAGE
    );
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of articles.");
  }
}

export async function updateDbArticle(
  id: number,
  title: string,
  url: string,
  category_id: number,
  intro: string,
  tags: { id: number }[],
  content: string,
  authorRole: number
) {
  try {
    if (
      !id ||
      !title.trim() ||
      !url.trim() ||
      category_id == null ||
      !intro.trim() ||
      !content.trim()
    ) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }
    if (title.trim().length >= 100 || intro.trim().length >= 160) {
      throw new Error("Titre ou texte d'intro trop long");
    }
    const updatedArticle = await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        title,
        image_url: url,
        category_id,
        intro,
        content,
        tags: {
          set: [],
          connect: tags,
        },
        waiting_for_approbation: authorRole === 2,
      },
    });

    console.log("Article updated :", updatedArticle);
  } catch (error) {
    console.error("Something went wront while updating article :", error);
    throw error;
  }
}

export async function createDbArticle(
  title: string,
  url: string,
  category_id: number,
  intro: string,
  tags: { id: number }[],
  content: string,
  authorId: number,
  authorRole: number
) {
  try {
    if (
      !title.trim() ||
      category_id == null ||
      !intro.trim() ||
      !content.trim()
    ) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    if (title.trim().length >= 100 || intro.trim().length >= 160) {
      throw new Error("Titre ou texte d'intro trop long");
    }

    if (!url.trim()) {
      url =
        "https://sympetrum.s3.eu-west-3.amazonaws.com/mediatheque/logosympetrum-53-800x600.webp";
    }

    const slug = slugify(title, customOptions);
    const createdArticle = await prisma.article.create({
      data: {
        title,
        image_url: url,
        category_id,
        intro,
        content,
        publication_date: new Date(),
        slug,
        tags: {
          connect: tags,
        },
        authorId,
        waiting_for_approbation: authorRole === 2,
      },
    });

    console.log("Article created :", createdArticle);
  } catch (error) {
    console.error("Something went wront while creating article :", error);
    throw error;
  }
}

export async function createDbTag(name: string) {
  try {
    if (!name.trim()) {
      throw new Error("Tous les champs doivent être remplis correctement.");
    }

    if (name.trim().length >= 40) {
      throw new Error("Nom du tag trop long");
    }

    const slug = slugify(name, customOptions);
    const createdTag = await prisma.tag.create({
      data: {
        name,
        slug,
      },
    });

    console.log("Tag created :", createdTag);
  } catch (error) {
    console.error("Something went wront while creating tag :", error);
    throw error;
  }
}

export async function softDeleteArticle(id: number) {
  try {
    const softDeletedArticle = await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        visible: false,
      },
    });
    console.log("Article soft deleted :", softDeletedArticle);
  } catch (error) {
    console.error("Something went wront while soft deleting article :", error);
    throw error;
  }
}

export async function fetchAllArticles() {
  try {
    // Using direct query to convert numbers to string for insensitive search
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        title: true,
      },
      where: {
        visible: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return articles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}
