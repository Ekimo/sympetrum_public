"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const teamMemberData = [
  {
    image: "/images/team/team11.jpg",
    name: "Membres du bureau",
    designation: [
      {
        titre: "Président",
        coordinateurs: "Samuel MESNIL",
      },
      {
        titre: "Vice-Présidente",
        coordinateurs: "Marie LAMOUILLE-HEBERT",
      },
      {
        titre: "Trésorier",
        coordinateurs: "Alain LADET",
      },
      {
        titre: "Trésorier adjoint",
        coordinateurs: "Nicolas SOUVIGNET",
      },
      {
        titre: "Secrétaire",
        coordinateurs: "Macha JOANIN",
      },
      {
        titre: "Secrétaire adjoint",
        coordinateurs: "Camille LE MERRER",
      },
    ],
  },
  {
    image: "/images/team/team11.jpg",
    name: "Membres du CA",
    designation: [
      {
        titre: null,
        coordinateurs: "Martin BOLENDER",
      },
      {
        titre: null,
        coordinateurs: "David LECLERC",
      },
      {
        titre: null,
        coordinateurs: "Thomas GRUET",
      },
      {
        titre: null,
        coordinateurs: "Loup NOALLY",
      },
    ],
  },
  {
    image: "/images/team/team11.jpg",
    name: "Coordinateurs",
    designation: [
      {
        titre: "Ain",
        coordinateurs:
          "Martin BOLENDER, Régis KRIEG-JACQUIER, Aurélien BOURDIN,  Thomas GRUET",
      },
      {
        titre: "Ardèche",
        coordinateurs: "Alain LADET",
      },
      {
        titre: "Drôme",
        coordinateurs:
          "Jean-Michel FATON, Bernard PONT, Claude SANITAS, Camille LE MERRER",
      },
      {
        titre: "Isère",
        coordinateurs:
          "Nicolas SOUVIGNET, Angélique PRUVOST, Cedric JACQUIER, Nadine CATRY",
      },
      {
        titre: "Loire",
        coordinateurs: "Loup NOALLY",
      },
      {
        titre: "Rhône",
        coordinateurs:
          "Hugo TAURU, Julien BOUNIOL, Samuel MESNIL, Hugo ROBUSCHI",
      },
      {
        titre: "Savoie",
        coordinateurs: "Poste à pourvoir",
      },
      {
        titre: "Haute-Savoie",
        coordinateurs: "Marie LAMOUILLE-HÉBERT, David LECLERC, Macha JOANIN",
      },
    ],
  },
];

const Team: React.FC = () => {
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
            {teamMemberData &&
              teamMemberData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="team-card text-center">
                    <div className="team-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={510}
                        height={550}
                      />

                      <div className="social-links">
                        <div className="d-table">
                          <div className="d-table-cell">
                            {value.designation.map((d, j) => (
                              <div key={j}>
                                {d.titre && <strong>{d.titre} :</strong>}{" "}
                                {d.coordinateurs}
                                <br />
                              </div>
                            ))}
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
