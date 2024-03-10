import React from "react";
import Link from "next/link";
import { FullDataCirculaire } from "../../../libs/utils/definitions";

const CirculaireContent: React.FC<{ circulaire: FullDataCirculaire }> = ({
  circulaire,
}) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="content-details">
                <div className="article-content">
                  <div>
                    {circulaire.articles &&
                      circulaire.articles.map((value, i) => (
                        <>
                          <div className="pb-40">
                            <h3 key={i}>{value.title}</h3>
                            <p>{value.intro}</p>
                            <p>
                              <Link
                                className="read-more-btn"
                                href={`/blog/${value.slug}`}
                              >
                                Lire la suite
                              </Link>
                            </p>
                          </div>
                        </>
                      ))}
                  </div>

                  {/* Category */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CirculaireContent;
