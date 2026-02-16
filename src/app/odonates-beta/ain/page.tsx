import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de l'Ain",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de l'Ain.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("ain");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de l'Ain"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="L'Ain"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/ain/calopteryx-haemorrhoidalis.jpg",
              alt: "Calopteryx haemorrhoidalis dans l'Ain",
              credit: "Loup Noally",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Le département de l&apos;Ain (5 762 km²), au nord de la région
              AuRA, présente deux grandes entités, la chaîne du Jura, zone de
              collines et de montagne à l&apos;est, et les plaines et plateaux à
              l&apos;ouest. Au nord-est, le pays de Gex est un secteur de
              piémont incliné vers le bassin genevois.
            </p>
            <p>
              Le Rhône et la Saône encadrent le département à l&apos;est, au sud
              et à l&apos;ouest, tandis que la rivière d&apos;Ain le traverse.
              Ces trois cours d&apos;eau et leurs affluents offrent les milieux
              lotiques tandis que les étangs de Bresse et de Dombes, les lacs du
              Bugey et les ballastières de la plaine de l&apos;Ain constituent
              les milieux lentiques.
            </p>
            <p>
              On doit ajouter à ces derniers de grands marais (Lavours) et
              tourbières (Cerin) entre autres. Les autres milieux favorables aux
              libellules sont les mares qui ponctuent la Bresse et le Bugey,
              ainsi que les goyas, des mares prairiales d&apos;altitude.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/ain/cordulegaster-bidentata.jpg",
              alt: "Cordulegaster bidentata",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/ain/somatochlora-metallica.jpg",
              alt: "Somatochlora metallica",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/ain/sympetrum-danae.jpg",
              alt: "Sympetrum danae",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            Un fleuve, de nombreuses rivières, des ruisseaux, des lacs, étangs
            et zones humides font de l&apos;Ain un département riche en odonates
            (116 501 données à la fin de 2024 et 897 observateurs). Des plaines
            aux plus hauts sommets de la chaîne du Jura, des milieux variés
            abritent une grande diversité d&apos;espèces.
          </p>
          <p>
            <strong>70 espèces</strong> sont connues du département, dont 3 qui
            n&apos;ont pas été revues depuis au moins 10 ans. Certaines espèces
            sont arrivées récemment (<em>Calopteryx haemorrhoidalis</em> en
            2002, <em>Trithemis annulata</em> en 2023), d&apos;autres n&apos;ont
            plus été revues depuis plus de 10 ans (<em>Sympetrum danae</em> en
            2005).
          </p>
          <p>
            L&apos;ensemble du territoire est prospecté mais il reste des zones
            blanches et des communes sans données. Nos efforts se portent sur ces
            zones et sur certaines espèces rares ou menacées : les 4{" "}
            <em>Leucorrhinia</em>, <em>Cordulegaster bidentata</em>,{" "}
            <em>Ophiogomphus cecilia</em> et <em>Somatochlora metallica</em>.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique de l'Ain"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/ain/leucorrhinia-pectoralis.jpg",
              alt: "Leucorrhinia pectoralis",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            La Leucorrhine à gros thorax (
            <em>Leucorrhinia pectoralis</em>) est une espèce protégée dont
            l&apos;Ain est considéré comme le bastion en France, en particulier
            en Dombes. Elle est rare et vulnérable.
          </p>
          <p>
            Un travail important de suivi et de conservation est mené par
            Sympetrum avec les acteurs locaux (N2000 en Dombes, par exemple).
            C&apos;est une espèce des étangs forestiers riches en végétation.
            Elle est sensible à l&apos;assèchement, donc menacée par le
            changement climatique.
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/ain.jpg",
              alt: "Cartographie des zones à prospecter dans l'Ain",
            },
          ]}
        >
          <p>
            L&apos;ensemble du territoire est prospecté mais il reste des zones
            blanches et des communes sans données. Nos efforts se portent sur ces
            zones et sur certaines espèces rares ou menacées.
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
            <h2>Derniers articles Ain</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
