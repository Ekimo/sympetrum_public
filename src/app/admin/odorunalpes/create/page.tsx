import { redirect } from "next/navigation";
import { getSession } from "../../../../../libs/utils/auth";
import AdminCreateDepartementSection from "@/components/Admin/Departements/AdminCreateDepartementSection";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  return (
    <AdminCreateDepartementSection
      departmentSlug="odorunalpes"
      backUrl="/admin/odorunalpes"
    />
  );
}
