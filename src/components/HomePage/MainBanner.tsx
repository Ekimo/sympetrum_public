"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../public/images/logo-sympetrum.jpg";

const MainBanner: React.FC = () => {
  return (
    <>
      <div
        className="hero-banner it-banner overly"
        style={{
          backgroundImage: `url(/images/hero-banner.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                      Groupe Sympetrum
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      Le Groupe de Recherche et de Protection des Libellules
                      Sympetrum se consacre à la connaissance et à la
                      conservation des libellules (Odonata) et de leurs habitats
                      qu&apos;ils soient naturels ou artificiels.
                    </p>

                    <Link
                      href="#discover"
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={bannerImg}
                      alt="Animate image"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
