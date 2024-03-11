import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";

export default async function Page() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de la Drôme"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>70 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2023</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>2021</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Schleicher Jörg et Faton Jean-Michel</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Le Merrer Camille, Dumont Gauthier-Alaric
            et Tardy Marielle.
            <br />
            Bilans odonatologiques annuels : 2016 [
            <Link
              href="http://sympetrum.fr/pdf/bilan_odonates2016_donnees_drome_vf_lpo.pdf"
              target="_blank"
            >
              PDF
            </Link>
            ] – 2017 [
            <Link
              href="http://sympetrum.fr/pdf/bilan_odonates2017_donnees_drome_vf-2.pdf"
              target="_blank"
            >
              PDF
            </Link>
            ] – 2018 [
            <Link
              href="http://www.sympetrum.fr/pdf/drome2018.pdf"
              target="_blank"
            >
              PDF
            </Link>
            ] – 2019 [
            <Link
              href="http://www.sympetrum.fr/pdf/bilan262019.pdf"
              target="_blank"
            >
              PDF
            </Link>
            ] – 2020 (à suivre) – 2021 (à suivre).
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Drôme</h2>
          </div>
          <LatestNewsSliderByCategory departement="drome" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de la Drôme (Deliry & al. 2013) : valide
            jusqu&apos;en 2024 –{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 2008)
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
                    Leucorrhinia pectoralis{" "}
                    <span className="reset-style">
                      (pourrait avoir été erratique)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Epitheca bimaculata{" "}
                    <span className="reset-style">(peut-être disparue)</span>,
                    Gomphus graslinii, Stylurus flavipes, Sympetrum vulgatum
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    <span className="focus">Coenagrion caerulescens</span>{" "}
                    <span className="reset-style">[3]</span>,{" "}
                    <span className="focus">Coenagrion pulchellum</span>, Lestes
                    dryas, Somatochlora flavomaculata
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    <span className="focus">Cordulegaster bidentata</span>,
                    Erythromma najas, Gomphus simillimus, Lestes barbarus,
                    Onychogomphus uncatus,
                    <span className="focus">Oxygastra curtisii</span>,
                    Platycnemis acutipennis,{" "}
                    <span className="focus">Sympetrum depressiusculum</span>,
                    Sympetrum flaveolum, Sympetrum meridionale,{" "}
                    <span className="focus">Sympetrum pedemontanum</span>
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna juncea, Brachytron pratense,{" "}
                    <span className="focus">Coenagrion mercuriale</span>,
                    Coenagrion scitulum{" "}
                    <span className="reset-style">
                      (amélioration à considérer)
                    </span>
                    , Cordulia aenea, Gomphus vulgatissimus{" "}
                    <span className="reset-style">
                      (amélioration à considérer)
                    </span>
                    , Ischnura pumilio, Lestes sponsa{" "}
                    <span className="reset-style">(statut aggravé depuis)</span>
                    , Lestes virens, Platycnemis latipes
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Calopteryx xanthostoma{" "}
                    <span className="reset-style">(2013)</span>, Leucorrhinia
                    caudalis <span className="reset-style">(2022) [2]</span>,
                    Trithemis annulata{" "}
                    <span className="reset-style">(2016) [1]</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Aeshna grandis, Hemianax ephippiger
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l’objet de suivis particuliers
              dans la Drôme
            </p>
            <p>
              [1] <span className="italic">Trithemis annulata</span> a été
              observé pour la première fois en 2016, l’espèce présente désormais
              de petites populations locales
              <br />
              [2] <span className="italic">Leucorrhinia caudalis</span> a été
              observée sur le plateau de Chambaran, selon une date récente à
              préciser. Cette information a été acquise en 2022 (DD 2022).
              <br />
              [3] <span className="italic">Coenagrion caerulescens</span>{" "}
              [Synthèse 2019 –{" "}
              <Link
                href="http://www.sympetrum.fr/pdf/coecae2019.pdf"
                target="_blank"
              >
                PDF
              </Link>
              ]. <br />
              [4] <span className="italic">Sympetrum depressiusculum</span>{" "}
              [Synthèse 2020 –{" "}
              <Link
                href="http://www.sympetrum.fr/rad/wp-content/uploads/2021/11/PNAodonates_Sympetrumdepressiusculum_LPO_GRPLS_Rapportdetude_VF.pdf"
                target="_blank"
              >
                PDF
              </Link>
              ].
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
            <li>
              Sous presse : <strong>Faton J.M. (coord.) 2023</strong> – –
              Libellules et demoiselles de La Drôme. Atlas Des Odonates du
              département de da Drôme. – Groupe Sympetrum et LPO AuRA : 384 pp.
            </li>
            <li>
              Atlas – <strong>Faton J.M. (coord.) 2023</strong> – Libellules et
              demoiselles de la Drôme. Atlas des Odonates du département de la
              Drôme. – Groupe Sympetrum.
            </li>
            <li>
              <strong>Deliry C. (coord.) 2008</strong> – Atlas illustré des
              Libellules de la région Rhône-Alpes. – Dir. du Groupe Sympetrum et
              Muséum d’Histoire Naturelle de Grenoble, éd. Parthénope, Mèze :
              404 pp.
            </li>
            <li>
              Liste rouge –{" "}
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
