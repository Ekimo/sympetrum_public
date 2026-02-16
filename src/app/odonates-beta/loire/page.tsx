import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de la Loire",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Loire.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("loire");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de la Loire"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="La Loire"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/loire/paysage.jpg",
              alt: "Gourd des Aillères, Loire",
              credit: "Loup Noally",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Traversé du sud au nord par le fleuve Loire, le département éponyme
              regorge d&apos;habitats diversifiés pour les libellules : près de
              350 étangs, de nombreuses tourbières d&apos;altitude, des marais de
              plaine, des canaux, des ruisseaux, des rivières, deux fleuves...
            </p>
            <p>
              La grande amplitude altitudinale du département, allant de 130 à
              1 661 m, contribue à la richesse spécifique du territoire.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/loire/oxygastra-curtisii.jpg",
              alt: "Oxygastra curtisii",
              credit: "Nathan Kolanek",
            },
            {
              src: "/images/departements/loire/sympetrum-depressiusculum.jpg",
              alt: "Sympetrum depressiusculum",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/loire/sympetrum-pedemontanum.jpg",
              alt: "Sympetrum pedemontanum",
              credit: "Samuel Mesnil",
            },
            {
              src: "/images/departements/loire/leucorrhinia-dubia.jpg",
              alt: "Larve de Leucorrhinia dubia",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            <strong>70 espèces</strong> sont recensées dans le département. Ces
            dernières années, les prospections ont été axées sur diverses espèces
            et groupes d&apos;espèces, principalement :{" "}
            <em>Oxygastra curtisii</em>, <em>Sympetrum pedemontanum</em>,{" "}
            <em>Sympetrum depressiusculum</em>,{" "}
            <em>Leucorrhinia pectoralis</em> et les odonates de tourbières
            d&apos;altitude.
          </p>
          <p>
            Le département accueille de belles populations de plusieurs espèces
            relativement peu fréquentes dans une grande partie de la région comme{" "}
            <em>Aeshna isoceles</em>, <em>Coenagrion ornatum</em>,{" "}
            <em>Leucorrhinia dubia</em>, <em>Sympetrum depressiusculum</em>,
            etc.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/loire/ophiogomphus-cecilia.jpg",
              alt: "Ophiogomphus cecilia - Gomphe serpentin",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            Le Gomphe serpentin (<em>Ophiogomphus cecilia</em>) est une espèce
            protégée extrêmement rare en Rhône-Alpes. Sa reproduction n&apos;est
            avérée que sur le fleuve Loire en aval de Roanne.
          </p>
          <p>
            Toutefois, sa présence est relativement difficile à détecter et
            d&apos;autres sites restent probablement à découvrir. Elle occupe les
            cours d&apos;eau à substrats graveleux et sableux, des ruisseaux aux
            fleuves.
          </p>
        </DepartmentSection>

        {/* Coordination */}
        <DepartmentSection
          title="Coordination"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/loire/coordinateurs.jpg",
              alt: "Coordinateur Loire",
            },
          ]}
          imageShape="circle"
        >
          <p>
            Pour l&apos;instant, le groupe Sympetrum compte un unique
            coordinateur dans le département de la Loire :
          </p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Loup NOALLY
            </li>
          </ul>
          <p className="dept-contact-link">
            Contact :{" "}
            <a href="mailto:noaloup@gmail.com">noaloup@gmail.com</a>
          </p>
          <p>
            <em>
              (Les candidatures pour les postes de co-coordination sont les
              bienvenues)
            </em>
          </p>
        </DepartmentSection>

        {/* Activités */}
        <DepartmentSection
          title="Activités"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/loire/atlas-cover.jpg",
              alt: "Atlas des Odonates de la Loire",
            },
          ]}
        >
          <p>
            Ateliers d&apos;identification des exuvies, prospections
            groupées... La délégation de la Loire propose ponctuellement des
            activités, en espérant pouvoir augmenter leur fréquence dans les
            années à venir.
          </p>
          <p>
            Pour tous sujets de discussions autour des odonates dans la Loire,
            vous pouvez vous abonner à la liste mail dédiée :{" "}
            <a
              href="https://framalistes.org/sympa/subscribe/obsodonates42"
              target="_blank"
            >
              framalistes.org/sympa/subscribe/obsodonates42
            </a>
          </p>
          <p>
            Récemment, le Groupe Sympetrum et FNE Loire ont réalisé un atlas
            départemental des odonates. De nombreux bénévoles ont participé en
            réalisant des prospections, en rédigeant des monographies, en aidant
            aux relectures ou en fournissant des photos.
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/loire.jpg",
              alt: "Cartographie des zones à prospecter dans la Loire",
            },
          ]}
        >
          <p>
            Si le département a été fortement prospecté entre 2012 et 2016 lors
            du lancement du projet d&apos;atlas départemental, de nombreux
            secteurs sont aujourd&apos;hui en manque de données récentes.
          </p>
          <p>
            Le nord du département mériterait d&apos;être prospecté davantage,
            notamment les bords de Loire pour rechercher{" "}
            <em>Ophiogomphus cecilia</em> et les suintements prairiaux du
            nord-est pour <em>Coenagrion ornatum</em>.
          </p>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Loire</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
