import React from "react";
import Search from "@/components/Common/Search";
import { Suspense } from "react";
import Pagination from "@/components/Common/Pagination";
import { TableSkeleton } from "@/components/Common/Skeletons";
import Link from "next/link";
import CirculaireTable from "@/components/Common/CirculaireTable";

export default async function AdminViewCirculaires() {
  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex justify-content-end">
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
            fallback={
              <TableSkeleton
                column={["#", "Titre de la circulaire", "ACTION"]}
                row={10}
              />
            }
          >
            <CirculaireTable />
          </Suspense>
        </div>
      </div>
    </>
  );
}
