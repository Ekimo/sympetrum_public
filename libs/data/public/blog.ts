"use server";

import prisma from "../../utils/prisma";
import { ArticleWithCategoryName } from "../../utils/definitions";

const ITEMS_PER_PAGE = 6;

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
        article.waiting_for_approbation = false AND
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
          article.waiting_for_approbation = false AND
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

export async function fetchLastArticles() {
  try {
    const articles = await prisma.article.findMany({
      where: {
        visible: true,
        waiting_for_approbation: false,
      },
      include: {
        category: true,
        tags: true,
      },
      orderBy: {
        id: "desc",
      },
      take: 6,
    });

    return articles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}

export async function fetchOneArticle(id: number) {
  try {
    const article = await prisma.article.findUnique({
      where: {
        id: id,
        visible: true,
        waiting_for_approbation: false,
      },
      include: {
        tags: true,
      },
    });
    return article;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch article.");
  }
}

export async function fetchOneTag(slug: string) {
  try {
    const tagWithArticles = await prisma.tag.findUnique({
      where: {
        slug,
      },
      include: {
        articles: {
          where: {
            visible: true,
            waiting_for_approbation: false,
          },
          include: {
            category: true, // Inclure les détails de la catégorie
            tags: true, // Inclure les tags liés à chaque article
          },
          orderBy: {
            id: "desc",
          },
        },
      },
    });
    return tagWithArticles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tag.");
  }
}

export async function fetchOneCategory(slug: string) {
  try {
    const categoryWithArticles = await prisma.category.findUnique({
      where: {
        slug,
      },
      include: {
        articles: {
          where: {
            visible: true,
            waiting_for_approbation: false,
          },
          include: {
            category: true, // Inclure les détails de la catégorie
            tags: true, // Inclure les tags liés à chaque article
          },
          orderBy: {
            id: "desc",
          },
        },
      },
    });
    return categoryWithArticles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tag.");
  }
}

export async function fetchLastByCategory(slug: string) {
  try {
    const categoryWithArticles = await prisma.category.findUnique({
      where: {
        slug,
      },
      include: {
        articles: {
          where: {
            visible: true,
            waiting_for_approbation: false,
          },
          include: {
            category: true, // Inclure les détails de la catégorie
            tags: true, // Inclure les tags liés à chaque article
          },
          orderBy: {
            id: "desc",
          },
          take: 6,
        },
      },
    });
    return categoryWithArticles;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tag.");
  }
}

export async function fetchArticlePagesByCategory(id: number) {
  try {
    const totalResults = await prisma.article.count({
      where: {
        visible: true,
        waiting_for_approbation: false,
        category_id: id,
      },
    });

    const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of articles.");
  }
}

export async function fetchArticlePagesByTag(id: number) {
  try {
    const totalResults = await prisma.article.count({
      where: {
        visible: true,
        waiting_for_approbation: false,
        tags: {
          some: {
            id: id,
          },
        },
      },
    });

    const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of articles.");
  }
}

export async function fetchOneArticleBySlug(slug: string) {
  try {
    const article = await prisma.article.findUnique({
      where: {
        visible: true,
        waiting_for_approbation: false,
        slug,
      },
      include: {
        tags: true,
        category: true,
      },
    });
    return article;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch article.");
  }
}

export async function fetchAllCategoriesWithCount() {
  try {
    const categoriesWithArticleCount = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            articles: {
              where: { visible: true, waiting_for_approbation: false },
            },
          },
        },
      },
    });

    return categoriesWithArticleCount.map((category) => ({
      ...category,
      articleCount: category._count.articles,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchAllCategories() {
  try {
    // Using direct query to convert numbers to string for insensitive search
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchAllTagsWithCount() {
  try {
    const tagsWithArticleCount = await prisma.tag.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        _count: {
          select: {
            articles: {
              where: { visible: true, waiting_for_approbation: false },
            },
          },
        },
      },
    });

    return tagsWithArticleCount.map((tag) => ({
      ...tag,
      articleCount: tag._count.articles,
    }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tags.");
  }
}

export async function fetchAllTags() {
  try {
    // Using direct query to convert numbers to string for insensitive search
    const tags = await prisma.tag.findMany();

    return tags;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tags.");
  }
}
