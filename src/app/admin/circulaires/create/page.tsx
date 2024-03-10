import AdminCreateCirculaire from "@/components/Admin/Circulaires/AdminCreateCirculaire";
import { fetchAllArticles } from "../../../../../libs/data/admin/blog";
import { getSession } from "../../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) {
    redirect("/admin");
  }
  const articles = await fetchAllArticles();
  return (
    <>
      <AdminCreateCirculaire articles={articles} />
    </>
  );
}
