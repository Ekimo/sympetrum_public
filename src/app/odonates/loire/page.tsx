import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
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

      <div className="pb-40">
        {/* Présentation */}
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>La Loire</h2>
                    <p>Traversé du sud au nord par le fleuve Loire, le département éponyme regorge d&apos;habitats diversifiés pour les libellules : près de 350 étangs, de nombreuses tourbières d&apos;altitude, des marais de plaine, des canaux, des ruisseaux, des rivières, deux fleuves...</p>
                    <p>La grande amplitude altitudinale du département, allant de 130 à 1 661 m, contribue à la richesse spécifique du territoire.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Gourd des Aillères" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/loire/paysage.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
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
                  <img alt="Oxygastra curtisii" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/loire/oxygastra-curtisii.jpg" />
                  <span className="dept-credit">Crédits : Nathan Kolanek</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Contexte odonatologique</h3>
                    <p><strong>70 espèces</strong> sont recensées dans le département. Ces dernières années, les prospections ont été axées sur diverses espèces, principalement : <em>Oxygastra curtisii</em>, <em>Sympetrum pedemontanum</em>, <em>Sympetrum depressiusculum</em>, <em>Leucorrhinia pectoralis</em> et les odonates de tourbières d&apos;altitude.</p>
                    <p>Le département accueille de belles populations de plusieurs espèces relativement peu fréquentes dans une grande partie de la région comme <em>Aeshna isoceles</em>, <em>Coenagrion ornatum</em>, <em>Leucorrhinia dubia</em>, <em>Sympetrum depressiusculum</em>, etc.</p>
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
                    <p>Le Gomphe serpentin (<em>Ophiogomphus cecilia</em>) est une espèce protégée extrêmement rare en Rhône-Alpes. Sa reproduction n&apos;est avérée que sur le fleuve Loire en aval de Roanne.</p>
                    <p>Toutefois, sa présence est relativement difficile à détecter et d&apos;autres sites restent probablement à découvrir. Elle occupe les cours d&apos;eau à substrats graveleux et sableux, des ruisseaux aux fleuves.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Ophiogomphus cecilia" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/loire/ophiogomphus-cecilia.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coordination */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Coordinateur Loire" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/loire/coordinateurs.jpg" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Coordination</h3>
                    <p>Pour l&apos;instant, le groupe Sympetrum compte un unique coordinateur dans le département de la Loire :</p>
                  </div>
                  <div className="about-text">
                    <ul>
                      <li><i className="fa-solid fa-circle-check"></i>Loup NOALLY</li>
                      <p>Contact : <a href="mailto:noaloup@gmail.com">noaloup@gmail.com</a></p>
                    </ul>
                    <p><em>(Les candidatures pour les postes de co-coordination sont les bienvenues)</em></p>
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
                    <p>Ateliers d&apos;identification des exuvies, prospections groupées... La délégation de la Loire propose ponctuellement des activités, en espérant pouvoir augmenter leur fréquence dans les années à venir.</p>
                    <p>Pour tous sujets de discussions autour des odonates dans la Loire, vous pouvez vous abonner à la liste mail dédiée : <a href="https://framalistes.org/sympa/subscribe/obsodonates42" target="_blank">framalistes.org/sympa/subscribe/obsodonates42</a></p>
                    <p>Récemment, le Groupe Sympetrum et FNE Loire ont réalisé un atlas départemental des odonates. De nombreux bénévoles ont participé en réalisant des prospections, en rédigeant des monographies, en aidant aux relectures ou en fournissant des photos.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Atlas des Odonates de la Loire" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/loire/atlas-cover.jpg" />
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
                  <img alt="Cartographie Loire" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/loire.png" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Zones à prospecter</h3>
                    <p>Si le département a été fortement prospecté entre 2012 et 2016 lors du lancement du projet d&apos;atlas départemental, de nombreux secteurs sont aujourd&apos;hui en manque de données récentes.</p>
                    <p>Le nord du département mériterait d&apos;être prospecté davantage, notamment les bords de Loire pour rechercher <em>Ophiogomphus cecilia</em> et les suintements prairiaux du nord-est pour <em>Coenagrion ornatum</em>.</p>
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
