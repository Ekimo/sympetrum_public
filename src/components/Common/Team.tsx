"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const Team: React.FC<{
  teamData?: {
    image: string;
    name: string;
    content: string;
  }[];
}> = ({ teamData }) => {
  const cards = teamData || [];

  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Une équipe de passionnés</h2>
            <p>
              Des élus engagés, des coordinateurs enthousiastes et des bénévoles
              captivés, tout le monde a sa place et nul besoin d&apos;être un
              spécialiste des libellules pour s&apos;investir
            </p>
          </div>
          <Swiper
            autoHeight={true}
            navigation={true}
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
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="team-slider"
          >
            {cards.map((value, i) => (
              <SwiperSlide key={i}>
                <div className="team-card text-center">
                  <div className="team-img">
                    <Image
                      src={value.image}
                      alt={value.name}
                      width={510}
                      height={550}
                    />

                    <div className="social-links">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: value.content,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="team-caption">
                    <h3>{value.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Team;
