import AdminCreateOdonate from "@/components/Admin/Odonates/AdminCreateOdonate";
import { getSession } from "../../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin");
  }
  return (
    <>
      <AdminCreateOdonate />
    </>
  );
}
