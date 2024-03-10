"use client";

import React from "react";
import Link from "next/link";

const CtaAreaDoc: React.FC = () => {
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
              Comptes rendus, AG, statuts et plus encore...
            </span>
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Documents de l&apos;association
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Link
              href="https://drive.google.com/drive/folders/1s9BwkbbYpKmVGNpFxU8KGPeKV2BJKTTZ?usp=drive_link"
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

export default CtaAreaDoc;
