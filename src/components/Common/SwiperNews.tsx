"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FullDataArticle } from "../../../libs/utils/definitions";

const SwiperNews: React.FC<{ lastestNews: FullDataArticle[] }> = ({
  lastestNews,
}) => {
  return (
    <>
      <Swiper
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="blog-slides"
      >
        {lastestNews &&
          lastestNews.map((value, i) => (
            <SwiperSlide key={i}>
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
                  <span className="date">16 février</span>
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
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperNews;
