"use client";

import React from "react";

const ContactInfo: React.FC<{ address?: string }> = ({ address }) => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Par mail</h3>
                <p>
                  <a href="mailto:contact.sympetrum@gmail.com">
                    contact.sympetrum@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Par courrier</h3>
                <p>{address || "192 impasse du Margellier, 07340 Limony"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
