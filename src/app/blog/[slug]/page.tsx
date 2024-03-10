import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Navbar from "@/components/Layouts/Navbar";
import { fetchOneArticleBySlug } from "../../../../libs/data/public/blog";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await fetchOneArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={article.title}
        BGImage="/images/page-banner4.jpg"
      />

      <BlogDetailsContent article={article} />
    </>
  );
}
