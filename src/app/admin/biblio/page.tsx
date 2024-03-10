import React from "react";
import AdminViewPublications from "@/components/Admin/Publications/AdminViewPublications";
import { redirect } from "next/navigation";
import { getSession } from "../../../../libs/utils/auth";

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
      <AdminViewPublications dataUrl={searchParams} />
    </>
  );
}
