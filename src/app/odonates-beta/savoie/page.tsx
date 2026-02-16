import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de la Savoie",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Savoie.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("savoie");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de la Savoie"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="La Savoie"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/savoie/calopteryx-haemorrhoidalis.jpg",
              alt: "Calopteryx haemorrhoidalis en Savoie",
              credit: "Régis Krieg-Jacquier",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Le département de la Savoie (6 028 km²), au nord-est de la région
              AuRA, présente quatre grandes entités, les chaînons montagneux du
              Jura à l&apos;ouest dominant une zone de collines, le bassin
              molassique, les chaînes subalpines (Bauges et Chartreuse) séparées
              des massifs alpins par le sillon alpin (vallée de l&apos;Isère
              notamment).
            </p>
            <p>
              Le Rhône limite le département à l&apos;ouest, tandis que
              l&apos;Isère et ses affluents le traversent. Les lacs du Bourget et
              d&apos;Aiguebelette sont les principaux milieux lentiques auxquels
              s&apos;ajoutent quelques lacs de barrage, un grand nombre de petits
              lacs d&apos;altitude et quelques ballastières.
            </p>
            <p>
              Il faut ajouter de grands marais (Chautagne) et de nombreuses
              tourbières. Les autres milieux favorables aux libellules sont les
              mares qui ponctuent la campagne, ainsi que des mares prairiales
              d&apos;altitude.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/savoie/boyeria-irene.jpg",
              alt: "Boyeria irene",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/savoie/epitheca-bimaculata.jpg",
              alt: "Epitheca bimaculata",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/savoie/somatochlora-metallica.jpg",
              alt: "Somatochlora metallica",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            Un fleuve, de nombreuses rivières, des ruisseaux, des lacs, des
            tourbières et zones humides font de la Savoie un département riche en
            odonates (35 851 données à la fin de 2024 et 698 observateurs). Au
            total <strong>69 espèces</strong> sont connues du département.
          </p>
          <p>
            Les vallées profondes permettent aux espèces méridionales de remonter
            jusqu&apos;en Savoie comme <em>Calopteryx haemorrhoidalis</em> en
            2012 et <em>Trithemis annulata</em> en 2024, alors que les zones de
            montagne sont le domaine de quelques espèces boréo-alpines.
          </p>
          <p>
            L&apos;ensemble du territoire est prospecté mais il reste des zones
            blanches et des communes sans données. Nos efforts devront se porter
            sur ces zones ainsi que sur certaines espèces rares ou menacées :{" "}
            <em>Leucorrhinia albifrons</em>, <em>L. caudalis</em>,{" "}
            <em>L. dubia</em>, <em>Cordulegaster bidentata</em>,{" "}
            <em>Ophiogomphus cecilia</em>, <em>Epitheca bimaculata</em>,{" "}
            <em>Boyeria irene</em> et <em>Somatochlora metallica</em>.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique de la Savoie"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/savoie/leucorrhinia-dubia.jpg",
              alt: "Leucorrhinia dubia - Leucorrhine douteuse",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            La Leucorrhine douteuse (<em>Leucorrhinia dubia</em>) est une espèce
            eurosibérienne dont la Savoie est un des bastions en France. Elle se
            rencontre essentiellement en altitude au-dessus de 700 m et elle peut
            atteindre 2 500 m.
          </p>
          <p>
            Cette espèce est inféodée aux tourbières et aux étangs végétalisés,
            acides et pauvres en poissons. Elle est vulnérable au changement
            climatique, au développement d&apos;activités piscicoles et
            touristiques ainsi qu&apos;à l&apos;intensification des activités
            pastorales intensives en montagne (piétinement, pollution par
            ruissellement, etc.).
          </p>
          <p>
            La Leucorrhine douteuse est une des espèces ciblées par le programme
            CIMaE.
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/savoie.jpg",
              alt: "Cartographie des zones à prospecter en Savoie",
            },
          ]}
        >
          <p>
            L&apos;ensemble du territoire est prospecté mais il reste des zones
            blanches et des communes sans données. Nos efforts devront se porter
            sur ces zones ainsi que sur certaines espèces rares ou menacées.
          </p>
          <p>
            Afin d&apos;avoir une meilleure connaissance de la localisation
            précise des espèces et de leurs populations, voici une cartographie
            des zones prioritaires à prospecter. À bientôt sur le terrain.
          </p>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Savoie</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
