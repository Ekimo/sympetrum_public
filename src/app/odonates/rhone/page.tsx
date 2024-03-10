import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates du Rhône"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>61 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2016</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2008,2004</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>2020</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Le Mell Benjamin, Mesnil Samuel et Bouniol Julien</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Karine Bastin, Quentin Schaming, Gwénaël
            David et Daniel Grand (1943-2013).
            <br />
            Un nouvel Atlas départemental est en projet, suite à celui préparé
            par Daniel Grand en 2004.
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Rhône</h2>
          </div>
          <LatestNewsSliderByCategory departement="rhone" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates du Rhône (David & al. 2016) : valide
            jusqu&apos;en 2027 –{" "}
            <Link
              href="http://www.sympetrum.fr/pdf/larhone2016.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 2008, Deliry & al. 2013)
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Catégorie</th>
                  <th scope="col">Espèce(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>RE</th>
                  <td className="italic">
                    Platycnemis latipes, Sympetrum depressiusculum
                  </td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Coenagrion pulchellum,{" "}
                    <span className="focus">Cordulegaster bidentata</span>,
                    Erythromma najas,{" "}
                    <span className="focus">Gomphus simillimus</span>,
                    Somatochlora flavomaculata
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Aeshna isoceles, Lestes barbarus, Lestes sponsa,{" "}
                    <span className="focus">Oxygastra curtisii</span>
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Boyeria irene, Brachytron pratense, Calopteryx
                    haemorrhoidalis, Lestes virens,{" "}
                    <span className="focus">Stylurus flavipes</span>
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Coenagrion mercuriale, Coenagrion scitulum, Cordulia aenea,
                    Gomphus vulgatissimus, Ischnura pumilio
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    <span className="focus">Coenagrion ornatum</span>,
                    Leucorrhinia pectoralis, Sympetrum vulgatum
                  </td>
                </tr>
                <tr>
                  <th>NE</th>
                  <td className="italic">
                    Trithemis annulata (nouvelle en 2023)
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Calopteryx xanthostoma, Hemianax ephippiger, Leucorrhinia
                    caudalis, Sympetrum flaveolum
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l’objet de suivis particuliers
              dans le Rhône
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
            <li>
              Atlas – <strong>Deliry C. (coord.) 2008</strong> – Atlas illustré
              des Libellules de la région Rhône-Alpes. – Dir. du Groupe
              Sympetrum et Muséum d’Histoire Naturelle de Grenoble, éd.
              Parthénope, Mèze : 404 pp.
            </li>
            <li>
              Liste rouge –{" "}
              <strong>Deliry C. & le Groupe Sympetrum 2016</strong> – Liste
              d’Alerte des Odonates du Rhône – 2016. – Doc. GRPLS. -{" "}
              <Link
                href="http://www.sympetrum.fr/pdf/larhone2016.pdf"
                target="_blank"
              >
                PDF
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
