import React from "react";
import { fetchOdonatePages } from "../../../../libs/data/public/odonates";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import Link from "next/link";
import OdonateTable from "@/components/Common/OdonateTable";

export default async function AdminViewOdonates({
  dataUrl,
}: {
  dataUrl?: {
    query?: string;
    page?: string;
  };
}) {
  const query = dataUrl?.query || "";
  const currentPage = Number(dataUrl?.page) || 1;
  const totalPages = await fetchOdonatePages(query);

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
                column={[
                  "#",
                  "Nom scientifique",
                  "Auteur",
                  "Année de description",
                  "ACTION",
                ]}
                row={10}
              />
            }
          >
            <OdonateTable
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
