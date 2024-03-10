import React from "react";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import Link from "next/link";
import { fetchArticlePages } from "../../../../libs/data/admin/blog";
import AdminBlogTable from "./AdminBlogTable";
import { getSession } from "../../../../libs/utils/auth";

export default async function AdminViewArticles({
  dataUrl,
}: {
  dataUrl?: {
    query?: string;
    page?: string;
  };
}) {
  const session = await getSession();
  const query = dataUrl?.query || "";
  const currentPage = Number(dataUrl?.page) || 1;
  const totalPages = await fetchArticlePages(query);

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <Search placeholder="Rechercher..." />
            </div>

            <div className="col-lg-3 col-md-3 d-flex">
              <div className="pt-40">
                <div className="container">
                  {session.userData.role !== 2 && (
                    <Link
                      href="create-tag"
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      <i className="fa fa-solid fa-plus" /> TAG
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-md-1 d-flex justify-content-end">
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
              <TableSkeleton column={["#", "Titre", "ACTION"]} row={10} />
            }
          >
            <AdminBlogTable query={query} currentPage={currentPage} />
          </Suspense>

          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
