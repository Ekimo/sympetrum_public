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
        pageTitle="Odonates de l’Ardèche"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>73 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2012</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>NC</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Ladet Alain, Juliand Pierre et Sanitas Claude</span>
            </div>
          </div>
          <p className="italic">Ancienne coordonnatrice : Christine Juliand.</p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Ardèche</h2>
          </div>
          <LatestNewsSliderByCategory departement="ardeche" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de l&apos;Ardèche (Deliry & al. 2013) :
            valide jusqu&apos;en 2024 –{" "}
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
                  <td>Aucune espèce réputée disparue</td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Coenagrion hastulatum,{" "}
                    <span className="focus">Coenagrion lunulatum</span>,
                    Coenagrion pulchellum, Erythromma najas, Somatochlora
                    arctica, Somatochlora metallica{" "}
                    <span className="reset-style">(2017) [3]</span>,{" "}
                    <span className="focus">Stylurus flavipes</span>
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    <span className="focus">Coenagrion caerulescens</span>,
                    Lestes dryas, Leucorrhinia dubia, Macromia splendens
                    (amélioration à considérer), Sympetrum depressiusculum,
                    Sympetrum vulgatum
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Cordulegaster bidentata, Cordulia aenea,{" "}
                    <span className="focus">Gomphus graslinii</span>, Gomphus
                    simillimus, Lestes barbarus,{" "}
                    <span className="focus">Oxygastra curtisii</span>, Sympetrum
                    danae, Sympetrum flaveolum, Sympetrum pedemontanum
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna isoceles, Aeshna juncea, Coenagrion mercuriale,
                    Coenagrion scitulum, Gomphus vulgatissimus, Ischnura
                    pumilio, Lestes virens, Onychogomphus uncatus, Platycnemis
                    acutipennis, Platycnemis latipes
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Brachytron pratense{" "}
                    <span className="reset-style">(2014)</span>, Sympetrum
                    meridionale <span className="reset-style">(2013)</span>,
                    Trithemis annulata{" "}
                    <span className="reset-style">(2016) [1]</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    <span className="focus">Hemianax ephippiger</span>,
                    Leucorrhinia pectoralis, Trithemis kirbyi{" "}
                    <span className="reset-style">(NA 2017) [2]</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l&apos;objet de suivis
              particuliers en Ardèche
            </p>
            <p>
              [1] Trithemis annulata a été observé pour la première fois en
              2016, l&apos;espèce présente désormais de petites populations
              locales
              <br />
              [2] Trithemis kirbyi a visité le département en 2017
              <br />
              [3] Somatochlora metallica considérée comme disparue selon la
              version de 2013 (RE 2013), a été retrouvée sur une ancienne
              station et semble s&apos;y maintenir en petit nombre (CR 2017).
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
            <li>
              Atlas – <strong>Ladet A., Juliand P. & Deliry C. 2012</strong> –
              Libellules d&apos;Ardèche. Atlas des Libellules du Parc naturel
              régional des Monts d&apos;Ardèche et du département de
              l&apos;Ardèche. – FRAPNA 07, GRPLS, PNR des Monts d&apos;Ardèche :
              236 pp.
            </li>
            <li>
              Liste rouge –{" "}
              <strong>Deliry C. & le Groupe Sympetrum 2013</strong> – iste Rouge
              des Odonates de Rhône-Alpes & Dauphiné 2013. – Col. Concepts &
              Méthodes, Groupe Sympetrum, Histoires Naturelles, n°25bis. –{" "}
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
