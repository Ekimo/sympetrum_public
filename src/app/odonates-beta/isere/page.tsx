import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates d'Isère",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates d'Isère.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("isere");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de l'Isère"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="L'Isère"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
        >
          <div className="dept-first-section">
            <p>
              Le département de l&apos;Isère compte <strong>78 espèces</strong>{" "}
              d&apos;odonates recensées. Coordonné par Nicolas Souvignet, Cédric
              Jacquier et Angélique Pruvost, le département bénéficie d&apos;une
              longue tradition d&apos;étude des libellules.
            </p>
            <p>
              <em>
                Anciens coordonnateurs : Aurélien Bourdin, Mathieu Juton,
                Cyrille Deliry et David Loose.
              </em>
            </p>
          </div>
        </DepartmentSection>

        {/* Coordination */}
        <DepartmentSection
          title="Coordination"
          imagePosition="left"
        >
          <p>Sympetrum compte 3 co-coordinateurs en Isère :</p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Nicolas SOUVIGNET
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Cédric JACQUIER
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Angélique PRUVOST
            </li>
          </ul>
        </DepartmentSection>

        {/* Informations complémentaires */}
        <DepartmentSection
          title="Informations complémentaires"
          imagePosition="right"
        >
          <p>
            Liste rouge des Odonates de l&apos;Isère (Deliry & al. 2013) :
            valide jusqu&apos;en 2024 &ndash;{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
          </p>
          <p>
            Versions antérieures (Loose 1987, GRPLS 1992, Deliry 2008)
          </p>

          <div className="table-responsive mt-30">
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
                    Gomphus simillimus,{" "}
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
                    <span className="reset-style">(DD 2015) [1]</span>,
                    Oxygastra curtisii{" "}
                    <span className="reset-style">(CR ?)</span>, Platycnemis
                    acutipennis{" "}
                    <span className="reset-style">(CR ?)</span>, Sympetrum
                    pedemontanum{" "}
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
              [1] <em>Ophiogomphus cecilia</em> est attesté par une
              photographie de Laurent Berger faite en 2015 à
              Saint-Romain-de-Jalionas.
            </p>
          </div>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/isere.jpg",
              alt: "Cartographie des zones à prospecter en Isère",
            },
          ]}
        >
          <p>
            Afin d&apos;avoir une meilleure connaissance de la localisation
            précise des espèces et de leurs populations, voici une cartographie
            des zones prioritaires à prospecter en Isère.
          </p>
          <p>À bientôt sur le terrain.</p>
        </DepartmentSection>

        {/* Dernières synthèses */}
        <DepartmentSection
          title="Dernières synthèses"
          imagePosition="right"
        >
          <ul>
            <li>
              Liste rouge &ndash;{" "}
              <strong>Deliry C. & le Groupe Sympetrum 2013</strong> &ndash; Liste
              Rouge des Odonates de Rhône-Alpes & Dauphiné 2013. &ndash; Col.
              Concepts & Méthodes, Groupe Sympetrum, Histoires Naturelles,
              n°25bis. &ndash;{" "}
              <Link
                href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
                target="_blank"
              >
                PDF
              </Link>
            </li>
            <li>
              Atlas &ndash;{" "}
              <strong>Deliry C. & le Groupe Sympetrum 2014</strong> &ndash;
              Nouvel Atlas des Libellules de l&apos;Isère. &ndash; Concepts &
              Méthodes, Sympetrum.
            </li>
            <li>
              Plan départemental &ndash; <strong>Deliry C. 2010</strong> &ndash;
              Observatoire des Odonates de l&apos;Isère. &ndash; Doc. GRPLS.
            </li>
          </ul>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Isère</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
