"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/images/about-img.jpg";

const About: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/oc4gkf7YrWs"]}
      />

      <section className="about-area ptb-100" id="discover">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div
                className="about-content about-content-two pl-0 mt-0"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="section-title">
                  <h2>En quelques mots</h2>
                </div>

                <div className="about-text">
                  <p>
                    Le Groupe de recherche et de protection des libellules
                    Sympetrum se consacre à la connaissance et à la conservation
                    des libellules (Odonata) et de leurs habitats qu&apos;ils
                    soient naturels ou artificiels. Les travaux scientifiques de
                    l&#39;association ont aussi pour objectif de suivre
                    l&#39;évolutions des populations, permettant ainsi
                    d&#39;alerter les décideurs et les gestionnaires sur
                    l&#39;importance de la protection des zones humides, en
                    utilisant les libellules comme bioindicatrices.
                    L&#39;activité de notre association se concentre sur
                    l&#39;ancienne région Rhône-Alpes avec près de 200 membres.
                  </p>
                  <h4>Notre histoire</h4>
                  <p>
                    Active depuis plus de 35 ans, l’association est devenue un
                    acteur important de la conservation des odonates. Elle
                    participe ainsi activement aux principales politiques
                    publiques en faveur de la biodiversité, celles engagées par
                    les services de l’État notamment. Notre association est
                    agréée au titre de la protection de l’environnement.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Nos actions</h4>
                  <p>
                    Sympetrum est un acteur majeur dans les domaines de
                    compétence suivants : Expertise des libellules et des zones
                    humides ; Bancarisation et validation des données
                    odonatologiques régionales ; Acteur du Plan national
                    d’actions en faveur des Libellules ; Soutient technique aux
                    différents partenaires (État, collectivités territoriales,
                    agences de l’eau, gestionnaires d’aires protégées, muséums,
                    associations…), Formation des membres de l&#39;association,
                    des étudiants et du grand public (universités, associations
                    et organismes divers) ; ainsi que la diffusion de la
                    connaissance à travers des éditions, articles, relations
                    presse et une bibliothèque spécialisée.
                  </p>
                </div>

                <div className="about-text">
                  <p>
                    Voilà résumées plus de trois décennies d&#39;implication
                    collective bénévole pour la connaissance et la conservation
                    des libellules.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="about-image right-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
