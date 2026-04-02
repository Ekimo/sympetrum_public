import { redirect } from "next/navigation";
import { getSession } from "../../../../libs/utils/auth";
import { DEPARTMENTS } from "../../../../libs/utils/departments";
import AdminDepartementsList from "@/components/Admin/Departements/AdminDepartementsList";
import prisma from "../../../../libs/utils/prisma";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  const counts = await prisma.departmentSection.groupBy({
    by: ["department_slug"],
    _count: { id: true },
  });

  const sectionCounts: Record<string, number> = {};
  for (const slug of Object.keys(DEPARTMENTS)) {
    const found = counts.find((c) => c.department_slug === slug);
    sectionCounts[slug] = found?._count.id ?? 0;
  }

  return <AdminDepartementsList sectionCounts={sectionCounts} />;
}
