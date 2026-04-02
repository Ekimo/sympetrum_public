import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSections from "@/components/Odonates/DepartmentSections";
import { DEPARTMENTS } from "../../../../libs/utils/departments";
import { fetchDepartmentSections } from "../../../../libs/data/public/departments";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { dept: string };
}): Promise<Metadata> {
  const config = DEPARTMENTS[params.dept];
  if (!config) return {};
  return {
    title: `Groupe Sympetrum - ${config.pageTitle}`,
    description: config.metaDescription,
  };
}

export default async function Page({
  params,
}: {
  params: { dept: string };
}) {
  const config = DEPARTMENTS[params.dept];
  if (!config) return notFound();

  const [sections, lastestNews] = await Promise.all([
    fetchDepartmentSections(params.dept),
    fetchLastByCategory(config.categorySlug),
  ]);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={config.pageTitle}
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <DepartmentSections sections={sections} />
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles {config.name}</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
