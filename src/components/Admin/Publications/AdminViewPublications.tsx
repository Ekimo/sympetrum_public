import React from "react";
import { fetchPublicationPages } from "../../../../libs/data/public/biblio";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import PublicationTable from "@/components/Common/PublicationTable";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import Link from "next/link";

export default async function AdminViewPublications({
  dataUrl,
}: {
  dataUrl?: {
    query?: string;
    page?: string;
  };
}) {
  const query = dataUrl?.query || "";
  const currentPage = Number(dataUrl?.page) || 1;
  const totalPages = await fetchPublicationPages(query);

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="row">
            <div className="col-lg-10 col-md-10">
              <Search placeholder="Rechercher..." />
            </div>
            <div className="col-lg-2 col-md-2 d-flex justify-content-end">
              <div className="pt-40">
                <div className="container">
                  <Link
                    href="create"
                    className="btn btn-primary"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <i className="fa fa-solid fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              admin={true}
            />
          </Suspense>

          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
