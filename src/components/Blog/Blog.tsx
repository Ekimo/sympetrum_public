import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../Common/Pagination";
import { FullDataArticle } from "../../../libs/utils/definitions";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default async function Blog({
  totalPage,
  articles,
}: {
  totalPage: number;
  articles: FullDataArticle[];
}) {
  return (
    <>
      <div className="row justify-content-center">
        {articles.length > 0 ? (
          articles.map((value, i) => (
            <div
              className="col-lg-6 col-md-6"
              key={i}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={100}
            >
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href={`/blog/${value.slug}`}>
                    <Image
                      src={value.image_url}
                      alt="image"
                      width={510}
                      height={383}
                    />
                  </Link>

                  <div className="post-tag">
                    <Link href={`/categorie/${value.category.slug}`}>
                      {value.category.name}
                    </Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">
                    {format(new Date(value.publication_date), "d MMMM yyyy", {
                      locale: fr,
                    })}
                  </span>
                  <h3>
                    <Link href={`/blog/${value.slug}`}>{value.title}</Link>
                  </h3>

                  <p>{value.intro.slice(0, 130)}...</p>

                  <Link href={`/blog/${value.slug}`} className="read-more-btn">
                    Lire l&apos;article
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4>Aucun article pour cette recherche</h4>
        )}

        <Pagination totalPages={totalPage} />
      </div>
    </>
  );
}
