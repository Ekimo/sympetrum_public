import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
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

      <div className="pb-40">
        {/* Présentation */}
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>La Drôme</h2>
                    <p>Entre Drôme des collines, Vercors, plaine de Valence ou Vallée du Rhône, la diversité des types de zones humides est importante dans le département. Les différences de relief (de 50 m à plus de 2 400 m) et de climat (continental, méditerranéen ou montagnard) expliquent cela.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Rivière Drôme" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/drome/paysage.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contexte odonatologique */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Cordulegaster bidentata" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/drome/cordulegaster-bidentata.jpg" />
                  <span className="dept-credit">Crédits : Jean-Michel Faton</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Contexte odonatologique</h3>
                    <p><strong>70 espèces</strong> ont été observées dans le département. Quelques espèces menacées font l&apos;objet de recherches ou de suivis spécifiques.</p>
                    <p>C&apos;est le cas par exemple pour <em>Sympetrum depressiusculum</em> (NT Rhône-Alpes 2014) et <em>S. pedemontanum</em> (VU Rhône-Alpes 2014), dont les populations dans le secteur de Pierrelatte sont importantes et méritent d&apos;être mieux connues.</p>
                    <p>Pour d&apos;autres espèces comme <em>Cordulegaster bidentata</em> (VU Rhône-Alpes 2014) ou <em>Oxygastra curtisii</em>, la discrétion des adultes les a fait passer relativement inaperçues pendant longtemps. L&apos;actualisation des méthodes d&apos;inventaire, en cherchant aussi les larves et les exuvies, permet de commencer à mieux connaître leur répartition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Espèce emblématique */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Espèce emblématique</h3>
                    <p><em>Coenagrion mercuriale</em> — des populations importantes sont connues et suivies de longue date, notamment dans la réserve des Ramières. L&apos;espèce se maintient quand son milieu de prédilection est encore présent, à savoir des eaux faiblement courantes, fraîches, ensoleillées et de bonne qualité.</p>
                    <p>Dans les secteurs où les canaux ont été trop remaniés comme dans la plaine de Montélimar, l&apos;espèce tend à disparaître. On la trouve essentiellement en vallée du Rhône et dans les plaines attenantes, bien qu&apos;elle soit de plus en plus observée en altitude (reproduction possible à 900 m).</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Coenagrion mercuriale" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/drome/coenagrion-mercuriale.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-coordinateurs */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Oxygastra curtisii" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/drome/oxygastra-curtisii.jpg" />
                  <span className="dept-credit">Crédits : Jean-Michel Faton</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Co-coordinateurs</h3>
                    <p>Le Groupe Sympetrum comporte 4 co-coordinateurs pour le département de la Drôme :</p>
                  </div>
                  <div className="about-text">
                    <ul>
                      <li><i className="fa-solid fa-circle-check"></i>Camille LE MERRER-LE BOT <span style={{fontWeight: 400, fontSize: "0.9em"}}>(représente la Drôme au CA)</span></li>
                      <li><i className="fa-solid fa-circle-check"></i>Jean-Michel FATON</li>
                      <li><i className="fa-solid fa-circle-check"></i>Bernard PONT</li>
                      <li><i className="fa-solid fa-circle-check"></i>Jörg SCHLEICHER</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activités */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Activités</h3>
                    <p>Les activités sont diverses dans la Drôme : participation à différents comités de pilotages, réalisation d&apos;études (suivi d&apos;espèces, inventaires de sites), conférences, animations grand public, organisation de week-end de prospection (OdorunAlpes).</p>
                    <p>Pour annoncer nos actions, une liste mail est utilisée : <a href="https://framalistes.org/sympa/subscribe/odonates-26" target="_blank">framalistes.org/sympa/subscribe/odonates-26</a></p>
                    <p>Y sont régulièrement proposées aussi des sorties « non-officielles », où il n&apos;est pas nécessaire de faire partie de l&apos;association, pour prospecter des secteurs ou des espèces ciblées en groupe.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Prospection sur la rivière Drôme" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/drome/prospection-1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zones à prospecter */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Cartographie Drôme" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/drome.png" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Zones à prospecter</h3>
                    <p>Dans le cadre de l&apos;atlas, publié en 2023, d&apos;intenses prospections ont permis d&apos;améliorer nos connaissances dans la Drôme. Malgré tout, quelques communes restent sans données et plus généralement, les secteurs où nous avons moins d&apos;adhérent·es mériteraient d&apos;être plus prospectés.</p>
                    <p>Les zones humides d&apos;altitude, comme celles du Vercors, sont aussi à prospecter régulièrement, du fait de leur vulnérabilité face aux changements climatiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
