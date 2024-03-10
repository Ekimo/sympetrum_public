"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">Groupe Sympetrum</Link>
                </div>

                <p>
                  Le Groupe de Recherche et de Protection des Libellules
                  Sympetrum, une association spécialisée sur la connaissance et
                  la protection des odonates.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/grpls" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sympetrum"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <Link
                  href="https://www.helloasso.com/associations/groupe-sympetrum-grpls"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Boutique HelloAsso
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Liens</h3>

                <ul className="list">
                  <li>
                    <Link href="/">Accueil</Link>
                  </li>
                  <li>
                    <Link href="/libellules-de-rhone-alpes/">
                      Libellules de Rhône-Alpes
                    </Link>
                  </li>
                  <li>
                    <Link href="/bibliographie/">Bibliographie</Link>
                  </li>
                  <li>
                    <Link href="/blog/">Actualités</Link>
                  </li>
                  <li>
                    <Link href="/contactez-nous/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget ml-4"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3>Liens rapides</h3>

                <ul className="list">
                  <li>
                    <Link href="/odonates/ain/">Département de l&apos;Ain</Link>
                  </li>
                  <li>
                    <Link href="/odonates/ardeche/">
                      Département de l&apos;Ardèche
                    </Link>
                  </li>
                  <li>
                    <Link href="/odonates/drome/">Département de la Drôme</Link>
                  </li>
                  <li>
                    <Link href="/odonates/isere/">
                      Département de l&apos;Isère
                    </Link>
                  </li>
                  <li>
                    <Link href="/odonates/loire/">Département de la Loire</Link>
                  </li>
                  <li>
                    <Link href="/odonates/rhone/">Département du Rhône</Link>
                  </li>
                  <li>
                    <Link href="/odonates/haute-savoie/">
                      Département de la Haute-Savoie
                    </Link>
                  </li>
                  <li>
                    <Link href="/odonates/savoie/">
                      Département de la Savoie
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>Contact</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> 7 RUE DE LA
                    SYNAGOGUE, 26400 AOUSTE-SUR-SYE
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:contact.sympetrum@gmail.com">
                      contact.sympetrum@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Groupe Sympetrum. Tous droits
              réservés{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
