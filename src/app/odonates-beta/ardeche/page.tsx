import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de l'Ardèche",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de l'Ardèche.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("ardeche");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de l'Ardèche"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="L'Ardèche"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/ardeche/paysage.jpg",
              alt: "Gorges du Chassezac, Ardèche",
              credit: "Alain Ladet",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Le département de l&apos;Ardèche est situé dans la partie
              méridionale de la région Rhône-Alpes. Il est délimité à l&apos;Ouest
              par la bordure sud-est du Massif central, avec les Cévennes au sud
              et le Plateau ardéchois plus au nord, à l&apos;Est par le fleuve
              Rhône et au Sud par les garrigues du nord du Gard.
            </p>
            <p>
              Ce département est soumis à des climats très variés, méditerranéen
              au sud-est dans l&apos;Ardèche méridionale, montagnard sur les
              reliefs de l&apos;ouest et continental dans le nord, dans les
              Boutières et le Haut Vivarais.
            </p>
            <p>
              La diversité des influences climatiques, des altitudes mais aussi
              de substrat géologique permet la présence de milieux extrêmement
              variés, allant des ruisseaux temporaires méditerranéens aux
              tourbières d&apos;altitude.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/ardeche/coenagrion-caerulescens.jpg",
              alt: "Coenagrion caerulescens",
              credit: "C. & P. Juliand",
            },
            {
              src: "/images/departements/ardeche/gomphus-graslinii.jpg",
              alt: "Gomphus graslinii",
              credit: "C. & P. Juliand",
            },
            {
              src: "/images/departements/ardeche/oxygastra-curtisii.jpg",
              alt: "Oxygastra curtisii",
              credit: "C. & P. Juliand",
            },
            {
              src: "/images/departements/ardeche/sympetrum-danae.jpg",
              alt: "Sympetrum danae",
              credit: "C. & P. Juliand",
            },
          ]}
        >
          <p>
            <strong>73 espèces</strong> connues à l&apos;issue de l&apos;année
            2024. Très peu de données ont été publiées avant 1988.
          </p>
          <p>
            La richesse odonatologique de l&apos;Ardèche méridionale est vite
            apparue majeure et l&apos;effort de prospection s&apos;est concentré
            sur ce secteur à la faveur de la présence d&apos;espèces
            d&apos;intérêt communautaire telles que{" "}
            <em>Macromia splendens</em>, <em>Oxygastra curtisii</em>,{" "}
            <em>Gomphus graslini</em>, mais aussi d&apos;autres espèces rares
            comme <em>Coenagrion caerulescens</em>.
          </p>
          <p>
            Les prospections en altitude n&apos;ont pas pour autant été négligées
            et ont mis en valeur la richesse des tourbières et autres zones
            humides avec la présence d&apos;espèces patrimoniales comme{" "}
            <em>Sympetrum vulgatum</em>, <em>Sympetrum danae</em> et{" "}
            <em>Somatochlora arctica</em> et ont permis la découverte de{" "}
            <em>Coenagrion lunulatum</em> (seul site connu en Rhône-Alpes).
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique de l'Ardèche"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/ardeche/macromia-splendens.jpg",
              alt: "Macromia splendens - Cordulie splendide",
              credit: "C. & P. Juliand",
            },
          ]}
        >
          <p>
            La Cordulie splendide (<em>Macromia splendens</em>) fréquente les
            secteurs calmes des cours d&apos;eau de taille variable. Cette
            espèce protégée est classée vulnérable sur les listes rouges
            européenne, nationale, régionale et départementale.
          </p>
          <p>
            Sensible à la pollution, cette espèce endémique du sud-est de
            l&apos;Europe (France, Espagne et Portugal) présente deux noyaux de
            population en Ardèche, conférant à ce département une forte
            responsabilité.
          </p>
        </DepartmentSection>

        {/* Co-coordinateurs */}
        <DepartmentSection
          title="Co-coordinateurs"
          imagePosition="left"
        >
          <p>
            Sympetrum compte 2 co-coordinateurs pour le département de
            l&apos;Ardèche.
          </p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Pierre JULIAND
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Alain LADET
            </li>
          </ul>
          <p className="dept-contact-link">
            Contact :{" "}
            <a href="mailto:pierre.juliand@orange.fr">
              pierre.juliand@orange.fr
            </a>{" "}
            ou{" "}
            <a href="mailto:alain.ladet@wanadoo.fr">alain.ladet@wanadoo.fr</a>
          </p>
        </DepartmentSection>

        {/* Activités */}
        <DepartmentSection
          title="Activités"
          imagePosition="right"
        >
          <p>
            Animations sur le terrain, conférence en salle, expositions de
            photographies. Possibilité de formation : biologie, aide à la
            détermination sur le terrain.
          </p>
          <p>Contrôle et validation des données sur Faune-AURA.</p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="État des connaissances"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/ardeche.jpg",
              alt: "Cartographie des zones à prospecter en Ardèche",
            },
          ]}
        >
          <p>
            La carte suivante présente à l&apos;échelle communale le nombre de
            données arrêté à fin 2024, ce qui met en évidence les secteurs
            sous-prospectés. Ceci devrait permettre d&apos;orienter les
            prospections à venir.
          </p>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Ardèche</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
