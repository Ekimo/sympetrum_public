import { notFound, redirect } from "next/navigation";
import { getSession } from "../../../../../../../libs/utils/auth";
import { DEPARTMENTS } from "../../../../../../../libs/utils/departments";
import { fetchOneDepartmentSection } from "../../../../../../../libs/data/admin/departments";
import AdminEditDepartementSection from "@/components/Admin/Departements/AdminEditDepartementSection";

export default async function Page({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  if (!DEPARTMENTS[params.slug]) return notFound();

  const id = parseInt(params.id || "0");
  const section = await fetchOneDepartmentSection(id);

  if (!section) return notFound();

  return (
    <AdminEditDepartementSection
      section={section}
      departmentSlug={params.slug}
    />
  );
}
