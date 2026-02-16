import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
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

      <div className="pb-40">
        {/* Présentation */}
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>La Haute-Savoie</h2>
                    <p>D&apos;une superficie de 4 388 km², le département de la Haute-Savoie est limitrophe avec les départements de l&apos;Ain, de la Savoie, du canton de Genève, de Vaud et du Valais en Suisse et enfin de la région Autonome de la Vallée d&apos;Aoste en Italie.</p>
                    <p>Bénéficiant d&apos;un relief varié, le département possède le plus fort dénivelé de France, proposant des altitudes allant de 250 mètres sur le Rhône à 4 808 mètres au sommet du massif du Mont-Blanc.</p>
                    <p>Cette forte topographie couplée à une multitude d&apos;unités géologiques, un climat montagnard bénéficiant d&apos;une pluviométrie élevée permet le développement d&apos;un patrimoine naturel remarquable caractérisé par une mosaïque d&apos;habitats naturels (alpages, pelouses sèches, forêts, zones humides, landes, etc.).</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Aeshna juncea" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/haute-savoie/aeshna-juncea.jpg" />
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
                  <img alt="Leucorrhinia albifrons" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/haute-savoie/leucorrhinia-albifrons.jpg" />
                  <span className="dept-credit">Crédits : Nathan Kolanek</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Contexte odonatologique</h3>
                    <p>Actuellement, <strong>63 à 65 espèces</strong> ont été observées au moins une fois sur le département après 2000, soit 64 à 66 % de la diversité nationale (98 espèces).</p>
                    <p>Dans notre département, nous tentons de suivre au mieux les espèces rares et protégées, telle que la Leucorrhine à front blanc (<em>Leucorrhinia albifrons</em>) qui s&apos;est installée sur plusieurs étangs dans la basse et moyenne vallée de l&apos;Arve.</p>
                    <p>Au vu du réchauffement climatique en cours, notre département est riche de nombreux habitats aquatiques alpins qui hébergent tout un cortège d&apos;espèces boréo-alpines, comme la Cordulie alpestre (<em>Somatochlora alpestris</em>), l&apos;Aeschne des joncs (<em>Aeshna juncea</em>) ou encore l&apos;Agrion hasté (<em>Coenagrion hastulatum</em>) qui méritent toute notre attention.</p>
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
                    <h3>Espèce emblématique de la Haute-Savoie</h3>
                    <p>L&apos;Aeschne azurée (<em>Aeshna caerulea</em>) est une véritable mascotte pour le département de la Haute-Savoie. Elle n&apos;est connue en France que de ce département où elle a été observée sur seulement 8 localités, situées entre Samoëns et Chamonix, entre 1 770 et 2 200 mètres d&apos;altitude.</p>
                    <p>Appréciant les hivers rigoureux et des périodes déneigées courtes l&apos;été, l&apos;Aeschne azurée fait partie de ce cortège d&apos;espèces boréo-alpines extrêmement soumises au réchauffement climatique mais également au développement des activités anthropiques de montagne.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Aeshna caerulea" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/haute-savoie/aeshna-caerulea.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
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
                  <img alt="Somatochlora alpestris" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/haute-savoie/somatochlora-alpestris.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Co-coordinateurs</h3>
                    <p>Sympetrum compte 3 co-coordinateurs/trices en Haute-Savoie.</p>
                  </div>
                  <div className="about-text">
                    <ul>
                      <li><i className="fa-solid fa-circle-check"></i>Macha JOANIN</li>
                      <li><i className="fa-solid fa-circle-check"></i>Marie LAMOUILLE-HÉBERT</li>
                      <li><i className="fa-solid fa-circle-check"></i>David LECLERC</li>
                      <p>Contact : <a href="mailto:contact.sympetrum@gmail.com">contact.sympetrum@gmail.com</a></p>
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
                    <p>Formations, animations auprès d&apos;un large public, prospections (Odorun&apos;Alpes), suivis d&apos;espèces, élaboration de dossiers rouges sur des projets qui menacent nos zones humides.</p>
                    <p>Un projet de recherche inédit pour protéger les zones humides d&apos;altitude (CIMaE) est en cours et sous la direction de Marie Lamouille-Hébert. Dans ce cadre, un programme de sciences participatives a été développé et mis en œuvre depuis 2021.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Coenagrion hastulatum" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/haute-savoie/coenagrion-hastulatum.jpg" />
                  <span className="dept-credit">Crédits : Nathan Kolanek</span>
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
                  <img alt="Cartographie Haute-Savoie" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/haute-savoie.png" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Zones à prospecter</h3>
                    <p>Comme le montre cette cartographie, plusieurs secteurs restent mal connus sur notre territoire. Vous pouvez nous aider en contribuant à l&apos;amélioration des connaissances des libellules sur votre territoire, à l&apos;échelle de votre commune, d&apos;un massif, etc.</p>
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
