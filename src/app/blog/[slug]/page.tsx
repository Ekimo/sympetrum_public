import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";
import Navbar from "@/components/Layouts/Navbar";
import { fetchOneArticleBySlug } from "../../../../libs/data/public/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await fetchOneArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: "Groupe Sympetrum - " + article.title,
    description: article.intro,
  };
}

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
