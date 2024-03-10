import React, { Suspense } from "react";
import PageBanner from "../../../../components/Common/PageBanner";
import Blog from "../../../../components/Blog/Blog";
import Navbar from "@/components/Layouts/Navbar";
import {
  fetchArticlePagesByTag,
  fetchOneTag,
} from "../../../../../libs/data/public/blog";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import { BlogSkeleton } from "@/components/Common/Skeletons";
import { notFound } from "next/navigation";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: {
    page?: string;
    slug: string;
  };
}) {
  const tag = await fetchOneTag(params.slug);

  if (!tag) {
    return notFound();
  }

  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchArticlePagesByTag(tag.id);

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={tag.name} BGImage="/images/page-banner4.jpg" />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Suspense key={currentPage} fallback={<BlogSkeleton />}>
                <Blog totalPage={totalPages} articles={tag.articles} />
              </Suspense>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar onArticle={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
