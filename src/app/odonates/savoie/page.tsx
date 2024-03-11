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
        pageTitle="Odonates de Savoie"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>68 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2008,2017</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>2014</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Mouchené Dominique et Giusti Alexandre</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Laura Guyot, Thomas Roux, Régis
            Krieg-Jacquier et Cyrille Deliry.
          </p>
        </div>
      </div>
      <div className="pb-40">
        <div className="container">
          <h3>Partenariats principaux</h3>

          <p>
            <Link href="https://www.cen-savoie.org/" target="_blank">
              Conservatoire d&apos;espaces naturels de Savoie
            </Link>{" "}
            – Parc National de la Vanoise (
            <Link
              href="http://biodiversite.vanoise-parcnational.fr/"
              target="_blank"
            >
              BiodiVanoise
            </Link>
            ) –{" "}
            <Link href="https://www.biodiversite-savoie.org/" target="_blank">
              Observatoire de la Biodiversité Savoie
            </Link>{" "}
            (
            <Link
              href="https://www.biodiversite-savoie.org/partenaires/grpls"
              target="_blank"
            >
              Signataire
            </Link>
            )
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Savoie</h2>
          </div>
          <LatestNewsSliderByCategory departement="savoie" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de Savoie (Deliry & al. 2013b) : valide
            jusqu&apos;en 2024 –{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 1987, 2006, 2008, Deliry & al. 2013a)
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
                  <td className="italic">Nehalennia speciosa</td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td>Aucune espèce concernée</td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Coenagrion hastulatum, Coenagrion pulchellum, Lestes dryas,
                    Sympetrum danae, Sympetrum depressiusculum
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Aeshna grandis, Cordulegaster bidentata, Erythromma najas,
                    Gomphus pulchellus, Gomphus vulgatissimus, Orthetrum
                    albistylum,{" "}
                    <span className="focus">Oxygastra curtisii</span>,
                    Somatochlora alpestris, Somatochlora arctica, Sympetrum
                    flaveolum
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna isoceles, Aeshna juncea, Brachytron pratense,
                    Coenagrion mercuriale{" "}
                    <span className="reset-style">
                      (statut probablement aggravé)
                    </span>
                    , Cordulia aenea, Ischnura pumilio, Leucorrhinia dubia,
                    Somatochlora flavomaculata{" "}
                    <span className="reset-style">
                      (amélioration à considérer ?)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Boyeria irene, Gomphus simillimus{" "}
                    <span className="reset-style">(DD 2015)</span>, Lestes
                    barbarus
                    <span className="reset-style">(probablement VU)</span>,
                    Lestes sponsa{" "}
                    <span className="reset-style">(probablement NT)</span>,
                    Lestes virens{" "}
                    <span className="reset-style">(probablement NT)</span>,
                    Leucorrhinia albifrons, Ophiogomphus cecilia{" "}
                    <span className="reset-style">(DD 2020)</span>, Stylurus
                    flavipes <span className="reset-style">(DD 2019)</span>,
                    Sympetrum meridionale, Sympetrum pedemontanum{" "}
                    <span className="reset-style">(probablement NA)</span>,
                    Sympetrum vulgatum{" "}
                    <span className="reset-style">(probablement EN)</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Calopteryx haemorrhoidalis, Coenagrion scitulum, Hemianax
                    ephippiger, Leucorrhinia pectoralis
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l&apos;objet de suivis
              particuliers en Savoie
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
              <strong>Deliry C. & le Groupe Sympetrum 2013b</strong> – Liste
              d&apos;alerte des Odonates de Savoie. 2013. – PNAO (2011-2015). –
              Doc. GRPLS. –{" "}
              <Link
                href="http://sympetrum.fr/pdf/lasavoie2013.pdf"
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
