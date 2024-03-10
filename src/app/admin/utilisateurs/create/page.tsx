import { getSession } from "../../../../../libs/utils/auth";
import { redirect } from "next/navigation";
import AdminCreateUser from "@/components/Admin/Utilisateurs/AdminCreateUser";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) {
    redirect("/admin");
  }
  return (
    <>
      <AdminCreateUser />
    </>
  );
}
