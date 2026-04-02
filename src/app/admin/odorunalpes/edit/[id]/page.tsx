import { notFound, redirect } from "next/navigation";
import { getSession } from "../../../../../../libs/utils/auth";
import { fetchOneDepartmentSection } from "../../../../../../libs/data/admin/departments";
import AdminEditDepartementSection from "@/components/Admin/Departements/AdminEditDepartementSection";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  const id = parseInt(params.id || "0");
  const section = await fetchOneDepartmentSection(id);

  if (!section) return notFound();

  return (
    <AdminEditDepartementSection
      section={section}
      departmentSlug="odorunalpes"
      backUrl="/admin/odorunalpes"
    />
  );
}
