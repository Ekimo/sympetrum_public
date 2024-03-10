import React from "react";
import AdminCreateTag from "@/components/Admin/Blog/AdminCreateTag";
import { getSession } from "../../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin/blog");
  }
  return (
    <>
      <AdminCreateTag />
    </>
  );
}
