import { fetchOnePublication } from "../../../../../../libs/data/admin/biblio";
import { notFound, redirect } from "next/navigation";
import { Publication } from "../../../../../../libs/utils/definitions";
import AdminEditPublication from "@/components/Admin/Publications/AdminEditPublication";
import { getSession } from "../../../../../../libs/utils/auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin");
  }
  const id = parseInt(params.id || "0");
  const publication = await fetchOnePublication(id);

  if (!publication) {
    return notFound();
  }

  return (
    <>
      <AdminEditPublication publication={publication as Publication} />
    </>
  );
}
