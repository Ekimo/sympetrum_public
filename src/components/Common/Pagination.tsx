"use client";

import clsx from "clsx";
import Link from "next/link";
import { generatePagination } from "../../../libs/utils/common";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <div className="col-lg-12 col-md-12 pb-100">
        {/* Pagination */}
        <div className="pagination-area">
          <PaginationArrow
            direction="left"
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage <= 1}
          />

          {allPages.map((page, index) => {
            if (page === "...") {
              // Don't create link when "..."
              return (
                <span key={index} className="page-numbers dot">
                  ...
                </span>
              );
            }

            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";

            return (
              <PaginationNumber
                key={index} // Avoid conflicts
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}

          <PaginationArrow
            direction="right"
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage >= totalPages}
          />
        </div>
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border",
    {
      "page-numbers current": isActive,
      "page-numbers dot": position === "middle",
    }
  );

  return isActive || position == "middle" ? (
    <span className={className}>{page}</span>
  ) : (
    <Link className="page-numbers" href={href} scroll={false}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx({
    "page-numbers-disabled": isDisabled,
    "hover:bg-gray-100": !isDisabled,
    "prev page-numbers": direction === "left",
    "next page-numbers": direction === "right",
  });

  const icon =
    direction === "left"
      ? "fa-solid fa-angles-left"
      : "fa-solid fa-angles-right";

  return isDisabled ? (
    <div className={className}>
      <i className={icon}></i>
    </div>
  ) : (
    <Link className={className} href={href} scroll={false}>
      <i className={icon}></i>
    </Link>
  );
}
