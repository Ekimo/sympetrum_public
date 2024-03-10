import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";
import { FullDataArticle } from "../../../libs/utils/definitions";
import he from "he";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogDetailsContent: React.FC<{ article: FullDataArticle }> = ({
  article,
}) => {
  const decodedContent = he.decode(article.content);
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="content-details">
                <div className="article-img">
                  <Image
                    src={article.image_url}
                    alt="image"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-list"></i>
                      <Link href={`/blog/categorie/${article.category.slug}`}>
                        {article.category.name}
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>{" "}
                      {format(
                        new Date(article.publication_date),
                        "d MMMM yyyy",
                        {
                          locale: fr,
                        }
                      )}
                    </li>
                  </ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: decodedContent,
                    }}
                  />

                  {/* Category */}
                  <ul className="category">
                    <li>
                      <span>Tags:</span>
                    </li>
                    {article.tags &&
                      article.tags.map((value, i) => (
                        <li key={i}>
                          <Link href={`/blog/tag/${value.slug}`}>
                            {value.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar onArticle={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
