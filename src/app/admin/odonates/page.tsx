import React from "react";
import AdminViewOdonates from "@/components/Admin/Odonates/AdminViewOdonates";
import { getSession } from "../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await getSession();
  if (session.userData.role == 2) {
    redirect("/admin");
  }
  return (
    <>
      <AdminViewOdonates dataUrl={searchParams} />
    </>
  );
}
