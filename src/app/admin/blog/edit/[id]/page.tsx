import { notFound, redirect } from "next/navigation";
import {
  fetchAllCategories,
  fetchAllTags,
  fetchOneArticle,
} from "../../../../../../libs/data/public/blog";
import AdminEditArticle from "@/components/Admin/Blog/AdminEditArticle";
import { getSession } from "../../../../../../libs/utils/auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getSession();
  const id = parseInt(params.id || "0");
  const article = await fetchOneArticle(id);
  if (session.userData.role == 2 && article?.authorId !== session.userData.id) {
    redirect("/admin/blog");
  }
  const categories = await fetchAllCategories();
  const tags = await fetchAllTags();

  if (!article) {
    return notFound();
  }

  return (
    <>
      <AdminEditArticle
        article={article}
        categories={categories}
        tags={tags}
        authorRole={session.userData.role}
      />
    </>
  );
}
