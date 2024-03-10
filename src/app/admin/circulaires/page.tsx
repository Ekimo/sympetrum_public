import React from "react";
import AdminViewCirculaires from "@/components/Admin/Circulaires/AdminViewCirculaires";
import { getSession } from "../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) {
    redirect("/admin");
  }
  return (
    <>
      <AdminViewCirculaires />
    </>
  );
}
