import AdminEditOdonate from "@/components/Admin/Odonates/AdminEditOdonate";
import { fetchOneOdonate } from "../../../../../../libs/data/admin/odonates";
import { notFound, redirect } from "next/navigation";
import { Odonate } from "../../../../../../libs/utils/definitions";
import { getSession } from "../../../../../../libs/utils/auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin");
  }
  const id = parseInt(params.id || "0");
  const odonate = await fetchOneOdonate(id);

  if (!odonate) {
    return notFound();
  }

  return (
    <>
      <AdminEditOdonate odonate={odonate as Odonate} />
    </>
  );
}
