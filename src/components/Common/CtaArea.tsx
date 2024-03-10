"use client";

import React from "react";
import Link from "next/link";

const CtaArea: React.FC = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Découvrir le document numérique GRPLS
            </span>
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Référentiel utilisé pour la base de l&apos;association
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Link
              href="http://www.sympetrum.fr/pdf/Referentiel2019.pdf"
              target="_blank"
              className="custom-btn"
            >
              Consulter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
