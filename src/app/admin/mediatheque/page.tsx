import React from "react";
import AdminViewMediatheque from "@/components/Admin/Mediatheque/AdminViewMediatheque";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <>
      <AdminViewMediatheque dataUrl={searchParams} />
    </>
  );
}
