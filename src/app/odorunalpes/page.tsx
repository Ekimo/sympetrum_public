import React from "react";
import { Metadata } from "next";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSections from "@/components/Odonates/DepartmentSections";
import { fetchDepartmentSections } from "../../../libs/data/public/departments";
import { fetchLastByCategory } from "../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odorunalpes",
  description:
    "Découvrez Odorunalpes, les sorties de prospection organisées par le Groupe Sympetrum en Rhône-Alpes.",
};

export default async function Page() {
  const [sections, lastestNews] = await Promise.all([
    fetchDepartmentSections("odorunalpes"),
    fetchLastByCategory("odorunalpes"),
  ]);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odorunalpes"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <DepartmentSections sections={sections} />
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Odorunalpes</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
