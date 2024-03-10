import React, { Suspense } from "react";
import PageBanner from "../../components/Common/PageBanner";
import Blog from "../../components/Blog/Blog";
import Navbar from "@/components/Layouts/Navbar";
import {
  fetchArticlePages,
  fetchFilteredArticle,
} from "../../../libs/data/public/blog";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import { BlogSkeleton } from "@/components/Common/Skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchArticlePages(query);
  const articles = await fetchFilteredArticle(query, currentPage);
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Blog & Actualités"
        BGImage="/images/page-banner4.jpg"
        button={{ name: "Calendrier des activités", anchor: "calendar" }}
      />
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Suspense key={query + currentPage} fallback={<BlogSkeleton />}>
                <Blog totalPage={totalPages} articles={articles} />
              </Suspense>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div className="row" id="calendar">
            <h3>Calendrier de nos activités</h3>
            <div className="pt-40">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=contact.sympetrum%40gmail.com&ctz=Europe%2FParis"
                width="100%"
                height="600"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
