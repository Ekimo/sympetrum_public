import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import { fetchPublicationPages } from "../../../libs/data/public/biblio";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import PublicationTable from "@/components/Common/PublicationTable";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import PublicationIntroContent from "@/components/Bibliographie/PublicationIntroContent";
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
  const totalPages = await fetchPublicationPages(query);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Bibliographie"
        BGImage="/images/page-banner3.jpg"
      />
      <PublicationIntroContent />
      <Search placeholder="Rechercher..." />
      <Suspense
        key={query + currentPage}
        fallback={
          <TableSkeleton
            column={["#", "Année", "Auteur", "Nom", "Revue"]}
            row={10}
          />
        }
      >
        <PublicationTable
          query={query}
          currentPage={currentPage}
          admin={false}
        />
      </Suspense>

      <Pagination totalPages={totalPages} />
    </>
  );
}
