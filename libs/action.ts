"use server";

import { z } from "zod";
import {
  addOdonate,
  deleteOdonate,
  updateDbOdonate,
} from "./data/admin/odonates";
import {
  addPublication,
  deletePublication,
  updateDbPublication,
} from "./data/admin/biblio";
import { updateDbSettings } from "./data/admin/facts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addMedia } from "./data/admin/media";
import { addUser, deleteUser, getUser, updateDbUser } from "./data/admin/users";
import bcrypt from "bcrypt";
import { MinimalArticle, Tag } from "./utils/definitions";
import {
  createDbArticle,
  createDbTag,
  softDeleteArticle,
  updateDbArticle,
} from "./data/admin/blog";
import he from "he";
import { addDbUserToNewsletter } from "./data/public/common";
import prisma from "./utils/prisma";
import { createDbCirculaire } from "./data/admin/circulaires";
import {
  createDbDepartmentSection,
  updateDbDepartmentSection,
  deleteDbDepartmentSection,
  reorderDbDepartmentSections,
  getNextPosition,
} from "./data/admin/departments";
import { DEPARTMENTS, DEPARTMENT_SLUGS } from "./utils/departments";

function getPublicPath(slug: string) {
  return DEPARTMENT_SLUGS.includes(slug) ? `/odonates/${slug}` : `/${slug}`;
}

function getAdminPath(slug: string) {
  return DEPARTMENT_SLUGS.includes(slug)
    ? `/admin/departements/${slug}`
    : `/admin/${slug}`;
}

// FORM VALIDATION
const FormCreateOdonateSchema = z.object({
  scientific_name: z.string(),
  author_and_year: z.string(),
  french_name: z.string(),
  suborder: z.string(),
  family: z.string(),
  link: z.string(),
});
const CreateOdonate = FormCreateOdonateSchema.omit({});
// **************************************
const FormCreateArticleSchema = z.object({
  title: z.string().nullable().transform((v) => v ?? ""),
  url: z.string().nullable().transform((v) => v ?? ""),
  category_id: z.coerce.number(),
  intro: z.string().nullable().transform((v) => v ?? ""),
});
const CreateArticle = FormCreateArticleSchema;
// **************************************
const FormCreateCirculaireSchema = z.object({
  title: z.string(),
});
const CreateCirculaire = FormCreateCirculaireSchema.omit({});
// **************************************
const FormCreateNewsletterUserSchema = z.object({
  email: z.string(),
});
const CreateNewsletterUser = FormCreateNewsletterUserSchema.omit({});
// **************************************
const FormCreateTagSchema = z.object({
  name: z.string(),
});
const CreateTag = FormCreateTagSchema.omit({});
// **************************************
const FormCreatePublicationSchema = z.object({
  title: z.string(),
  author: z.string(),
  year: z.string(),
  journal: z.string(),
  book_citation: z.string(),
  volume: z.string(),
  number: z.string(),
  editor: z.string(),
  additional_comments: z.string(),
  link: z.string(),
});
const CreatePublication = FormCreatePublicationSchema.omit({});
// **************************************
const FormCreateMediaSchema = z.object({
  title: z.string(),
});
const CreateMedia = FormCreateMediaSchema.omit({});
// **************************************
const FormSettingsSchema = z.object({
  members: z.coerce.number(),
  odonates_data: z.coerce.number(),
  actions: z.coerce.number(),
  posted_publications: z.coerce.number(),
  youtube_url: z.string(),
  team_image_1: z.string(),
  team_title_1: z.string(),
  team_content_1: z.string(),
  team_image_2: z.string(),
  team_title_2: z.string(),
  team_content_2: z.string(),
  team_image_3: z.string(),
  team_title_3: z.string(),
  team_content_3: z.string(),
});
const UpdateSettings = FormSettingsSchema.omit({});
// **************************************
const FormCreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.coerce.number(),
});
const CreateUser = FormCreateUserSchema.omit({});
// **************************************
const FormDepartmentSectionSchema = z.object({
  title: z.string().min(1),
  image_url: z.string(),
  image_alt: z.string(),
  image_credit: z.string(),
});
const CreateDepartmentSection = FormDepartmentSectionSchema;
// !FORM VALIDATION

// CREATE ACTIONS
export async function createOdonate(formData: FormData) {
  const {
    scientific_name,
    author_and_year,
    french_name,
    suborder,
    family,
    link,
  } = CreateOdonate.parse({
    scientific_name: formData.get("scientific_name"),
    author_and_year: formData.get("author_and_year"),
    french_name: formData.get("french_name"),
    suborder: formData.get("suborder"),
    family: formData.get("family"),
    link: formData.get("link"),
  });

  await addOdonate(
    scientific_name,
    author_and_year,
    french_name,
    suborder,
    family,
    link
  );

  revalidatePath("/faune-generale");
  redirect("/admin/odonates");
}
// ******************************v
export async function createPublication(formData: FormData) {
  const {
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
  } = CreatePublication.parse({
    title: formData.get("title"),
    author: formData.get("author"),
    year: formData.get("year"),
    journal: formData.get("journal"),
    book_citation: formData.get("book_citation"),
    volume: formData.get("volume"),
    number: formData.get("number"),
    editor: formData.get("editor"),
    concerned_journal: formData.get("concerned_journal"),
    additional_comments: formData.get("additional_comments"),
    link: formData.get("link"),
  });

  await addPublication(
    title,
    author,
    year,
    journal,
    book_citation,
    volume,
    number,
    editor,
    additional_comments,
    link
  );

  revalidatePath("/bibliographie");
  redirect("/admin/biblio");
}
// ******************************v
export async function createMedia(
  formData: FormData,
  fileUrl: string,
  fileType: string
) {
  const { title } = CreateMedia.parse({
    title: formData.get("title"),
  });

  await addMedia(title, fileUrl, fileType);

  redirect("/admin/mediatheque");
}
// ******************************v
export async function createUser(formData: FormData) {
  const { name, email, password, role } = CreateUser.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  await addUser(name, email, password, role);

  redirect("/admin/utilisateurs");
}
// ******************************
export async function createArticle(
  formData: FormData,
  content: string,
  tags: Tag[],
  authorId: number,
  authorRole: number,
  isDraft: boolean = false
) {
  const { title, url, category_id, intro } = CreateArticle.parse({
    title: formData.get("title"),
    url: formData.get("url"),
    category_id: formData.get("category"),
    intro: formData.get("intro"),
  });

  const escapedContent = he.escape(content);
  const tagIdsArray = tags.map((element) => ({ id: element.id }));

  await createDbArticle(
    title,
    url,
    category_id,
    intro,
    tagIdsArray,
    escapedContent,
    authorId,
    authorRole,
    isDraft
  );
  revalidatePath("/", "layout");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}
// ******************************
export async function createCirculaire(
  formData: FormData,
  articles: MinimalArticle[]
) {
  const { title } = CreateCirculaire.parse({
    title: formData.get("title"),
  });

  const articleIdsArray = articles.map((element) => ({ id: element.id }));

  const circulaireSlug = await createDbCirculaire(title, articleIdsArray);

  return circulaireSlug;
}
// ******************************
export async function createTag(formData: FormData) {
  const { name } = CreateTag.parse({
    name: formData.get("name"),
  });

  await createDbTag(name);

  revalidatePath("/blog");
  redirect("/admin/blog");
}
// ******************************
export async function addUserToNewsletterList(formData: FormData) {
  const { email } = CreateNewsletterUser.parse({
    email: formData.get("email"),
  });

  await addDbUserToNewsletter(email);
}
// !CREATE ACTIONS

// UPDATE ACTIONS
export async function updateSettings(formData: FormData) {
  const data = UpdateSettings.parse({
    members: formData.get("members"),
    odonates_data: formData.get("odonates_data"),
    actions: formData.get("actions"),
    posted_publications: formData.get("posted_publications"),
    youtube_url: formData.get("youtube_url"),
    team_image_1: formData.get("team_image_1"),
    team_title_1: formData.get("team_title_1"),
    team_content_1: formData.get("team_content_1"),
    team_image_2: formData.get("team_image_2"),
    team_title_2: formData.get("team_title_2"),
    team_content_2: formData.get("team_content_2"),
    team_image_3: formData.get("team_image_3"),
    team_title_3: formData.get("team_title_3"),
    team_content_3: formData.get("team_content_3"),
  });

  await updateDbSettings(data);

  revalidatePath("/admin/parametres");
  revalidatePath("/");
}

export async function updateOdonate(id: number, formData: FormData) {
  const {
    scientific_name,
    author_and_year,
    french_name,
    suborder,
    family,
    link,
  } = CreateOdonate.parse({
    scientific_name: formData.get("scientific_name"),
    author_and_year: formData.get("author_and_year"),
    french_name: formData.get("french_name"),
    suborder: formData.get("suborder"),
    family: formData.get("family"),
    link: formData.get("link"),
  });

  await updateDbOdonate(
    id,
    scientific_name,
    author_and_year,
    french_name,
    suborder,
    family,
    link
  );

  revalidatePath("/admin/odonates");
  revalidatePath("/faune-generale");
  redirect("/admin/odonates");
}

export async function updatePublication(id: number, formData: FormData) {
  const {
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
  } = CreatePublication.parse({
    title: formData.get("title"),
    author: formData.get("author"),
    year: formData.get("year"),
    journal: formData.get("journal"),
    book_citation: formData.get("book_citation"),
    volume: formData.get("volume"),
    number: formData.get("number"),
    editor: formData.get("editor"),
    concerned_journal: formData.get("concerned_journal"),
    additional_comments: formData.get("additional_comments"),
    link: formData.get("link"),
  });

  await updateDbPublication(
    id,
    title,
    author,
    year,
    journal,
    book_citation,
    volume,
    number,
    editor,
    additional_comments,
    link
  );

  revalidatePath("/admin/biblio");
  revalidatePath("/bibliographie");
  redirect("/admin/biblio");
}

export async function updateUser(id: number, formData: FormData) {
  const { name, email, password, role } = CreateUser.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    role: formData.get("role"),
  });

  await updateDbUser(id, name, email, password, role);

  revalidatePath("/admin/utilisateurs");
  redirect("/admin/utilisateurs");
}

export async function updateArticle(
  id: number,
  formData: FormData,
  content: string,
  tags: Tag[],
  authorRole: number,
  isDraft: boolean = false
) {
  const { title, url, category_id, intro } = CreateArticle.parse({
    title: formData.get("title"),
    url: formData.get("url"),
    category_id: formData.get("category"),
    intro: formData.get("intro"),
  });

  const escapedContent = he.escape(content);
  const tagIdsArray = tags.map((element) => ({ id: element.id }));

  await updateDbArticle(
    id,
    title,
    url,
    category_id,
    intro,
    tagIdsArray,
    escapedContent,
    authorRole,
    isDraft
  );

  revalidatePath("/", "layout");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

// !UPDATE ACTIONS

// DELETE ACTIONS
export async function removeOdonate(id: number) {
  await deleteOdonate(id);

  revalidatePath("/faune-generale");
}
// *******************************
export async function removePublication(id: number) {
  await deletePublication(id);

  revalidatePath("/bibliographie");
}
// *******************************
export async function removeUser(id: number) {
  await deleteUser(id);

  revalidatePath("/admin/utilisateurs");
}
// *******************************
export async function removeArticle(id: number) {
  await softDeleteArticle(id);
  revalidatePath("/", "layout");
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}
// *******************************
export async function removeDepartmentSection(
  id: number,
  departmentSlug: string
) {
  await deleteDbDepartmentSection(id);

  revalidatePath(getPublicPath(departmentSlug));
  revalidatePath(getAdminPath(departmentSlug));
}
// !DELETE ACTIONS

// DEPARTMENT SECTION ACTIONS
export async function createDepartmentSection(
  departmentSlug: string,
  formData: FormData,
  content: string
) {
  if (!DEPARTMENTS[departmentSlug]) {
    throw new Error("Département invalide.");
  }

  const { title, image_url, image_alt, image_credit } =
    CreateDepartmentSection.parse({
      title: formData.get("title"),
      image_url: formData.get("image_url"),
      image_alt: formData.get("image_alt"),
      image_credit: formData.get("image_credit"),
    });

  const escapedContent = he.escape(content);
  const position = await getNextPosition(departmentSlug);

  await createDbDepartmentSection({
    department_slug: departmentSlug,
    position,
    title,
    content: escapedContent,
    image_url,
    image_alt,
    image_credit,
  });

  revalidatePath(getPublicPath(departmentSlug));
  redirect(getAdminPath(departmentSlug));
}

export async function updateDepartmentSection(
  id: number,
  departmentSlug: string,
  formData: FormData,
  content: string
) {
  const { title, image_url, image_alt, image_credit } =
    CreateDepartmentSection.parse({
      title: formData.get("title"),
      image_url: formData.get("image_url"),
      image_alt: formData.get("image_alt"),
      image_credit: formData.get("image_credit"),
    });

  const escapedContent = he.escape(content);

  await updateDbDepartmentSection(id, {
    title,
    content: escapedContent,
    image_url,
    image_alt,
    image_credit,
  });

  revalidatePath(getPublicPath(departmentSlug));
  redirect(getAdminPath(departmentSlug));
}

export async function reorderDepartmentSections(
  orderedIds: number[],
  departmentSlug: string
) {
  const updates = orderedIds.map((id, index) => ({ id, position: index }));
  await reorderDbDepartmentSections(updates);

  revalidatePath(getPublicPath(departmentSlug));
  revalidatePath(getAdminPath(departmentSlug));
}
// !DEPARTMENT SECTION ACTIONS

// NEWSLETTER ACTIONS
export async function addNewsletterEmails(emails: string[]) {
  const results = { added: 0, duplicates: 0, invalid: 0, errors: [] as string[] };

  for (const raw of emails) {
    const email = raw.trim().toLowerCase();
    if (!email) continue;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      results.invalid++;
      results.errors.push(`Adresse invalide : ${email}`);
      continue;
    }

    try {
      await addDbUserToNewsletter(email);
      results.added++;
    } catch (error) {
      if (error instanceof Error && error.message.includes("déjà enregistrée")) {
        results.duplicates++;
      } else {
        results.invalid++;
        results.errors.push(`Erreur pour ${email}`);
      }
    }
  }

  revalidatePath("/admin/newsletter");
  return results;
}

export async function removeNewsletterEmail(id: number) {
  try {
    await prisma.newsletter.delete({ where: { id } });
  } catch (error) {
    throw new Error("Erreur lors de la suppression.");
  }
  revalidatePath("/admin/newsletter");
}
// !NEWSLETTER ACTIONS

// AUTHENTICATE ACTIONS
export async function authUser(email: string, password: string) {
  const user = await getUser(email);
  if (!user) return null;

  const passwordsMatch = await bcrypt.compare(password, user.password);
  if (passwordsMatch) return user;
  return null;
}
export async function redirectAfterAuth() {
  redirect("/admin");
}
// !AUTHENTICATE ACTIONS
