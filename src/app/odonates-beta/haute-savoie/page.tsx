import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de la Haute-Savoie",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Haute-Savoie.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("haute-savoie");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de la Haute-Savoie"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="La Haute-Savoie"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/haute-savoie/aeshna-juncea.jpg",
              alt: "Aeshna juncea en Haute-Savoie",
              credit: "Loup Noally",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              D&apos;une superficie de 4 388 km², le département de la
              Haute-Savoie est limitrophe avec les départements de l&apos;Ain, de
              la Savoie, du canton de Genève, de Vaud et du Valais en Suisse et
              enfin de la région Autonome de la Vallée d&apos;Aoste en Italie.
            </p>
            <p>
              Bénéficiant d&apos;un relief varié, le département de la
              Haute-Savoie possède ainsi le plus fort dénivelé de France,
              proposant des altitudes allant de 250 mètres sur le Rhône à
              4 808 mètres au sommet du massif du Mont-Blanc.
            </p>
            <p>
              Cette forte topographie couplée à une multitude d&apos;unités
              géologiques, un climat montagnard bénéficiant également d&apos;une
              pluviométrie élevée permet ainsi le développement d&apos;un
              patrimoine naturel remarquable caractérisé par une mosaïque
              d&apos;habitats naturels (alpages, pelouses sèches, forêts, zones
              humides, landes, etc.).
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/haute-savoie/leucorrhinia-albifrons.jpg",
              alt: "Leucorrhinia albifrons",
              credit: "Nathan Kolanek",
            },
            {
              src: "/images/departements/haute-savoie/somatochlora-alpestris.jpg",
              alt: "Somatochlora alpestris",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/haute-savoie/coenagrion-hastulatum.jpg",
              alt: "Coenagrion hastulatum",
              credit: "Nathan Kolanek",
            },
          ]}
        >
          <p>
            Actuellement, <strong>63 à 65 espèces</strong> ont été observées au
            moins une fois sur le département après 2000, soit 64 à 66 % de la
            diversité nationale (98 espèces).
          </p>
          <p>
            Dans notre département, nous tentons de suivre au mieux les espèces
            rares et protégées, telle que la Leucorrhine à front blanc (
            <em>Leucorrhinia albifrons</em>) qui s&apos;est installée sur
            plusieurs étangs dans la basse et moyenne vallée de l&apos;Arve.
          </p>
          <p>
            Au vu du réchauffement climatique en cours, notre département est
            riche de nombreux habitats aquatiques alpins qui hébergent tout un
            cortège d&apos;espèces boréo-alpines, comme la Cordulie alpestre (
            <em>Somatochlora alpestris</em>), l&apos;Aeschne des joncs (
            <em>Aeshna juncea</em>) ou encore l&apos;Agrion hasté (
            <em>Coenagrion hastulatum</em>) qui méritent toute notre attention
            face à cette menace qui impacte directement la quantité et la qualité
            de l&apos;eau.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique de la Haute-Savoie"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/haute-savoie/aeshna-caerulea.jpg",
              alt: "Aeshna caerulea - Aeschne azurée",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            L&apos;Aeschne azurée (<em>Aeshna caerulea</em>) est une véritable
            mascotte pour le département de la Haute-Savoie. Elle n&apos;est
            connue en France que de ce département où elle a été observée sur
            seulement 8 localités, situées entre Samoëns et Chamonix, entre
            1 770 et 2 200 mètres d&apos;altitude.
          </p>
          <p>
            Appréciant les hivers rigoureux et des périodes déneigées courtes
            l&apos;été, l&apos;Aeschne azurée fait partie de ce cortège
            d&apos;espèces boréo-alpines extrêmement soumises au réchauffement
            climatique mais également au développement des activités anthropiques
            de montagne.
          </p>
        </DepartmentSection>

        {/* Co-coordinateurs */}
        <DepartmentSection
          title="Co-coordinateurs"
          imagePosition="left"
        >
          <p>
            Sympetrum compte 3 co-coordinateurs/trices en Haute-Savoie.
          </p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Macha JOANIN
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Marie
              LAMOUILLE-HÉBERT
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>David LECLERC
            </li>
          </ul>
          <p className="dept-contact-link">
            Contact :{" "}
            <a href="mailto:contact.sympetrum@gmail.com">
              contact.sympetrum@gmail.com
            </a>
          </p>
        </DepartmentSection>

        {/* Activités */}
        <DepartmentSection
          title="Activités"
          imagePosition="right"
        >
          <p>
            Formations, animations auprès d&apos;un large public, prospections
            (Odorun&apos;Alpes), suivis d&apos;espèces, élaboration de dossiers
            rouges sur des projets qui menacent nos zones humides.
          </p>
          <p>
            Un projet de recherche inédit pour protéger les zones humides
            d&apos;altitude (CIMaE) est en cours et sous la direction de Marie
            Lamouille-Hébert. Dans ce cadre, un programme de sciences
            participatives a été développé et mis en œuvre depuis 2021.
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/haute-savoie.jpg",
              alt: "Cartographie des zones à prospecter en Haute-Savoie",
            },
          ]}
        >
          <p>
            Comme le montre cette cartographie, plusieurs secteurs restent mal
            connus sur notre territoire. Vous pouvez nous aider en contribuant à
            l&apos;amélioration des connaissances des libellules sur votre
            territoire, à l&apos;échelle de votre commune, d&apos;un massif, etc.
          </p>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Haute-Savoie</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
