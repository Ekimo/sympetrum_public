import React from "react";
import { redirect } from "next/navigation";
import { getSession } from "../../../../libs/utils/auth";
import AdminViewUser from "@/components/Admin/Utilisateurs/AdminViewUser";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await getSession();
  if (session.userData.role !== 0) {
    redirect("/admin");
  }
  return (
    <>
      <AdminViewUser dataUrl={searchParams} />
    </>
  );
}
