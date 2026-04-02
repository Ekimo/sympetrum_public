import { redirect } from "next/navigation";
import { getSession } from "../../../../libs/utils/auth";
import { DEPARTMENTS } from "../../../../libs/utils/departments";
import { fetchAllDepartmentSections } from "../../../../libs/data/admin/departments";
import AdminDepartementSections from "@/components/Admin/Departements/AdminDepartementSections";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  const department = DEPARTMENTS["odorunalpes"];
  const sections = await fetchAllDepartmentSections("odorunalpes");

  return (
    <AdminDepartementSections
      sections={sections}
      department={department}
      backUrl="/admin/odorunalpes"
    />
  );
}
