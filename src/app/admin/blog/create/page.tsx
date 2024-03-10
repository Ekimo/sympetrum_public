import React from "react";
import AdminCreateArticle from "@/components/Admin/Blog/AdminCreateArticle";
import {
  fetchAllCategories,
  fetchAllTags,
} from "../../../../../libs/data/public/blog";
import { getSession } from "../../../../../libs/utils/auth";

export default async function Page() {
  const session = await getSession();
  const categories = await fetchAllCategories();
  const tags = await fetchAllTags();
  return (
    <>
      <AdminCreateArticle
        categories={categories}
        tags={tags}
        session={session}
      />
    </>
  );
}
