import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates de la Drôme",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Drôme.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("drome");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de la Drôme"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="La Drôme"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/drome/paysage.jpg",
              alt: "Rivière Drôme, Montmaur-en-Diois",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Entre Drôme des collines, Vercors, plaine de Valence ou Vallée du
              Rhône, la diversité des types de zones humides est importante dans
              le département. Les différences de relief (de 50 m à plus de
              2 400 m) et de climat (continental, méditerranéen ou montagnard)
              expliquent cela.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/drome/cordulegaster-bidentata.jpg",
              alt: "Cordulegaster bidentata",
              credit: "Jean-Michel Faton",
            },
            {
              src: "/images/departements/drome/oxygastra-curtisii.jpg",
              alt: "Oxygastra curtisii",
              credit: "Jean-Michel Faton",
            },
            {
              src: "/images/departements/drome/sympetrum-depressiusculum.jpg",
              alt: "Sympetrum depressiusculum",
              credit: "Jean-Michel Faton",
            },
            {
              src: "/images/departements/drome/sympetrum-pedemontanum.jpg",
              alt: "Sympetrum pedemontanum",
              credit: "Jean-Michel Faton",
            },
          ]}
        >
          <p>
            <strong>70 espèces</strong> ont été observées dans le département.
            Quelques espèces menacées font l&apos;objet de recherches ou de
            suivis spécifiques.
          </p>
          <p>
            C&apos;est le cas par exemple pour{" "}
            <em>Sympetrum depressiusculum</em> (NT Rhône-Alpes 2014) et{" "}
            <em>S. pedemontanum</em> (VU Rhône-Alpes 2014), dont les populations
            dans le secteur de Pierrelatte sont importantes et méritent
            d&apos;être mieux connues.
          </p>
          <p>
            Pour d&apos;autres espèces comme <em>Cordulegaster bidentata</em>{" "}
            (VU Rhône-Alpes 2014) ou <em>Oxygastra curtisii</em>, la discrétion
            des adultes les a fait passer relativement inaperçues pendant
            longtemps. L&apos;actualisation des méthodes d&apos;inventaire, en
            cherchant aussi les larves et les exuvies, permet de commencer à
            mieux connaître leur répartition.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/drome/coenagrion-mercuriale.jpg",
              alt: "Coenagrion mercuriale à Piégros-la-Clastre",
            },
          ]}
        >
          <p>
            <em>Coenagrion mercuriale</em> — des populations importantes sont
            connues et suivies de longue date, notamment dans la réserve des
            Ramières. L&apos;espèce se maintient quand son milieu de
            prédilection est encore présent, à savoir des eaux faiblement
            courantes, fraîches, ensoleillées et de bonne qualité.
          </p>
          <p>
            Dans les secteurs où les canaux ont été trop remaniés comme dans la
            plaine de Montélimar, l&apos;espèce tend à disparaître. On la trouve
            essentiellement en vallée du Rhône et dans les plaines attenantes,
            bien qu&apos;elle soit de plus en plus observée en altitude
            (reproduction possible à 900 m).
          </p>
        </DepartmentSection>

        {/* Co-coordinateurs */}
        <DepartmentSection
          title="Co-coordinateurs"
          imagePosition="left"
        >
          <p>
            Le Groupe Sympetrum comporte 4 co-coordinateurs pour le département
            de la Drôme :
          </p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Camille LE
              MERRER-LE BOT{" "}
              <span style={{ fontWeight: 400, fontSize: "0.9em" }}>
                (représente la Drôme au Conseil d&apos;administration)
              </span>
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Jean-Michel FATON
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Bernard PONT
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Jörg SCHLEICHER
            </li>
          </ul>
        </DepartmentSection>

        {/* Activités */}
        <DepartmentSection
          title="Activités"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/drome/prospection-1.jpg",
              alt: "Recherche d'exuvies sur la rivière Drôme",
            },
          ]}
        >
          <p>
            Les activités sont diverses dans la Drôme : participation à
            différents comités de pilotages, réalisation d&apos;études (suivi
            d&apos;espèces, inventaires de sites), conférences, animations grand
            public, organisation de week-end de prospection (OdorunAlpes).
          </p>
          <p>
            Pour annoncer nos actions, une liste mail est utilisée :{" "}
            <a
              href="https://framalistes.org/sympa/subscribe/odonates-26"
              target="_blank"
            >
              framalistes.org/sympa/subscribe/odonates-26
            </a>
          </p>
          <p>
            Y sont régulièrement proposées aussi des sorties
            &laquo; non-officielles &raquo;, où il n&apos;est pas nécessaire de
            faire partie de l&apos;association, pour prospecter des secteurs ou
            des espèces ciblées en groupe.
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/drome.jpg",
              alt: "Cartographie des zones à prospecter dans la Drôme",
            },
          ]}
        >
          <p>
            Dans le cadre de l&apos;atlas, publié en 2023, d&apos;intenses
            prospections ont permis d&apos;améliorer nos connaissances dans la
            Drôme. Malgré tout, quelques communes restent sans données et plus
            généralement, les secteurs où nous avons moins d&apos;adhérent·es
            mériteraient d&apos;être plus prospectés et réservent sans doute des
            surprises, dans les Baronnies par exemple.
          </p>
          <p>
            Les zones humides d&apos;altitude, comme celles du Vercors, sont
            aussi à prospecter régulièrement, du fait de leur vulnérabilité face
            aux changements climatiques.
          </p>
          <p>
            Par ailleurs, l&apos;évolution des méthodes de prospection, avec une
            recherche accrue de larves et d&apos;exuvies, permet d&apos;affiner
            nos connaissances. La systématisation de ces recherches sur les cours
            d&apos;eau permettra sans doute des découvertes dans les années à
            venir.
          </p>
        </DepartmentSection>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Drôme</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
