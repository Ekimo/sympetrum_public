import React from "react";
import AdminViewArticles from "@/components/Admin/Blog/AdminViewArticles";

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
      <AdminViewArticles dataUrl={searchParams} />
    </>
  );
}
