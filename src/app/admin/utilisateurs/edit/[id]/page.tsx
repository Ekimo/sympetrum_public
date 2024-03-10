import { notFound, redirect } from "next/navigation";
import { User } from "../../../../../../libs/utils/definitions";
import AdminEditUser from "@/components/Admin/Utilisateurs/AdminEditUser";
import { fetchOneUser } from "../../../../../../libs/data/admin/users";
import { getSession } from "../../../../../../libs/utils/auth";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getSession();
  if (session.userData.role !== 0) {
    redirect("/admin");
  }
  const id = parseInt(params.id || "0");
  const user = await fetchOneUser(id);

  if (!user) {
    return notFound();
  }

  return (
    <>
      <AdminEditUser user={user as User} />
    </>
  );
}
