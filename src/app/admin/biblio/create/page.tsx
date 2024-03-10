import AdminCreatePublication from "@/components/Admin/Publications/AdminCreatePublication";
import { redirect } from "next/navigation";
import { getSession } from "../../../../../libs/utils/auth";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin");
  }
  return (
    <>
      <AdminCreatePublication />
    </>
  );
}
