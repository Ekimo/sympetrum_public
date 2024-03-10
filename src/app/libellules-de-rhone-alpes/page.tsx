import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import OdonateIntroContent from "../../components/Odonates/OdonateIntroContent";
import { fetchOdonatePages } from "../../../libs/data/public/odonates";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import OdonateTable from "@/components/Common/OdonateTable";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import Navbar from "@/components/Layouts/Navbar";

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
  const totalPages = await fetchOdonatePages(query);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Libellules de Rhône-Alpes"
        BGImage="/images/page-banner2.jpg"
      />
      <OdonateIntroContent />
      <Search placeholder="Rechercher..." />
      <Suspense
        key={query + currentPage}
        fallback={
          <TableSkeleton
            column={[
              "#",
              "Nom scientifique",
              "Auteur",
              "Année de description",
              "Document lié",
            ]}
            row={10}
          />
        }
      >
        <OdonateTable query={query} currentPage={currentPage} admin={false} />
      </Suspense>

      <Pagination totalPages={totalPages} />
    </>
  );
}
