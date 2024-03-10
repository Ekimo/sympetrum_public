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
        pageTitle="Odonates de l’Ain"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>72 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2008</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>NC</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Krieg-Jacquier Régis et Bourdin Aurélien</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Valentin Baux, Cyrille Deliry et Pierre
            Marigo.
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Ain</h2>
          </div>
          <LatestNewsSliderByCategory departement="ain" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de l&apos;Ain (Deliry & al. 2013) : valide
            jusqu&apos;en 2024 –{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 1995, 1998, 2006, 2008)
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
                    Coenagrion ornatum, Platycnemis acutipennis, Sympetrum
                    flaveolum, Sympetrum pedemontanum
                  </td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Coenagrion hastulatum, Gomphus simillimus,{" "}
                    <span className="focus">
                      Leucorrhinia albifrons, Leucorrhinia caudalis,
                      Somatochlora arctica
                    </span>
                    , Sympetrum danae,{" "}
                    <span className="focus">Sympetrum depressiusculum</span>
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Calopteryx haemorrhoidalis, Coenagrion pulchellum, Lestes
                    dryas, Leucorrhinia dubia
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    <span className="focus">
                      Cordulegaster bidentata, Epitheca bimaculata
                    </span>
                    , Erythromma najas,{" "}
                    <span className="focus">Oxygastra curtisii</span>,
                    Somatochlora metallica, Stylurus flavipes, Sympetrum
                    vulgatum
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna grandis, Aeshna juncea, Brachytron pratense,
                    Coenagrion mercuriale, Coenagrion scitulum, Cordulia aenea,
                    Gomphus vulgatissimus, Ischnura pumilio, Lestes barbarus,
                    Lestes virens,{" "}
                    <span className="focus">Leucorrhinia pectoralis</span>{" "}
                    <span className="reset-style">(statut aggravé depuis)</span>
                    , Somatochlora flavomaculata
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    <span className="focus">Ophiogomphus cecilia</span>{" "}
                    <span className="reset-style">(DD 2015) [1]</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Trithemis annulata{" "}
                    <span className="reset-style">(nouvelle en 2023)</span>
                  </td>
                </tr>
                <tr>
                  <th>Invalidées</th>
                  <td className="italic">
                    Calopteryx xanthostoma, Platycnemis latipes
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l’objet de suivis particuliers
              dans l‘Ain
            </p>
            <p>
              [1] <span className="italic">Ophiogomphus cecilia</span> connu
              d’une mention en 1789 a été redécouvert en 2015.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
            <li>
              <strong>Deliry C. (coord.) 2008</strong> – Atlas illustré des
              Libellules de la région Rhône-Alpes. – Dir. du Groupe Sympetrum et
              Muséum d&apos;Histoire Naturelle de Grenoble, éd. Parthénope, Mèze
              : 404 pp.
            </li>
            <li>
              <strong>Deliry C. & le Groupe Sympetrum 2013</strong> – Liste
              Rouge des Odonates de Rhône-Alpes & Dauphiné 2013. – Col. Concepts
              & Méthodes, Groupe Sympetrum, Histoires Naturelles, n°25bis. –{" "}
              <Link
                href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
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
