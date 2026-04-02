import { notFound, redirect } from "next/navigation";
import { getSession } from "../../../../../../libs/utils/auth";
import { DEPARTMENTS } from "../../../../../../libs/utils/departments";
import AdminCreateDepartementSection from "@/components/Admin/Departements/AdminCreateDepartementSection";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  if (!DEPARTMENTS[params.slug]) return notFound();

  return <AdminCreateDepartementSection departmentSlug={params.slug} />;
}
