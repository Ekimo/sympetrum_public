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
        pageTitle="Odonates de l'Isère"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>78 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2014</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>2010</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>
                Souvignet Nicolas, Jacquier Cédric et Pruvost Angélique
              </span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Aurélien Bourdin, Mathieu Juton, Cyrille
            Deliry et David Loose.
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Isère</h2>
          </div>
          <LatestNewsSliderByCategory departement="isere" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de l&apos;Isère (Deliry & al. 2013) :
            valide jusqu&apos;en 2024 –{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Loose 1987, GRPLS 1992, Deliry 2008)
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
                    Coenagrion lunulatum, Sympecma paedisca
                  </td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Gomphus simillimus,
                    <span className="focus">Leucorrhinia pectoralis</span>,
                    Sympetrum depressiusculum
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Coenagrion pulchellum, Lestes dryas,{" "}
                    <span className="focus">
                      Leucorrhinia albifrons, Leucorrhinia caudalis
                    </span>
                    , Somatochlora arctica, Stylurus flavipes
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Coenagrion hastulatum, Cordulegaster bidentata, Epitheca
                    bimaculata, Erythromma najas, Leucorrhinia dubia,
                    Somatochlora alpestris, Somatochlora metallica, Sympetrum
                    danae, Sympetrum flaveolum, Sympetrum meridionale, Sympetrum
                    vulgatum
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna grandis, Aeshna juncea, Brachytron pratense,
                    Coenagrion mercuriale, Coenagrion scitulum, Cordulia aenea,
                    Gomphus vulgatissimus, Ischnura pumilio, Lestes barbarus,
                    Lestes virens, Somatochlora flavomaculata
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Ophiogomphus cecilia{" "}
                    <span className="reset-style">(DD 2015) [3]</span>,
                    Oxygastra curtisii{" "}
                    <span className="reset-style">(CR ?)</span>, Platycnemis
                    acutipennis <span className="reset-style">(CR ?)</span>,
                    Sympetrum pedemontanum{" "}
                    <span className="reset-style">(CR ?)</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Hemianax ephippiger, Lestes macrostigma, Onychogomphus
                    uncatus, Trithemis annulata
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l&apos;objet de suivis
              particuliers en Isère
            </p>
            <p>
              [1] <span className="italic">Ophiogomphus cecilia</span> est
              attesté par une photographie de Laurent Berger faite en 2015 à
              Saint-Romain-de-Jalionas.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
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
            <li>
              Atlas – <strong>Deliry C. & le Groupe Sympetrum 2014</strong> –
              Nouvel Atlas des Libellules de l’Isère. – Concepts & Méthodes,
              Sympetrum.
            </li>
            <li>
              Plan départemental - <strong>Deliry C. 2010</strong> –
              Observatoire des Odonates de l’Isère. – Doc. GRPLS.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
