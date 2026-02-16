import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates du Rhône",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates du Rhône.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("rhone");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates du Rhône"
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
                    <h2>Le Rhône</h2>
                    <p>Encadré par le Massif Central à l&apos;ouest et les premiers contreforts du Jura à l&apos;est, le département du Rhône est un véritable carrefour géographique. Avec le Beaujolais au nord, les Monts d&apos;Or au centre, les Monts du Lyonnais au sud-ouest et la partie septentionale du Pilat au sud, notre département dispose d&apos;une diversité de milieux significative.</p>
                    <p>Chef-lieu du département, la ville de Lyon se situe à la confluence entre la Saône et le Rhône.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Paysage du Rhône" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/rhone/paysage.jpg" />
                  <span className="dept-credit">Crédits : Aurélien Labroche</span>
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
                  <img alt="Trithemis annulata" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/rhone/trithemis-annulata.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Contexte odonatologique</h3>
                    <p><strong>75 espèces</strong> ont été inventoriées dans le Rhône. Nos efforts de prospection se concentrent sur l&apos;actualisation de la présence d&apos;espèces à enjeux telles que <em>Cordulegaster bidentata</em> (classé VU en Rhône-Alpes, 2014) et sur les nouvelles espèces présentes sur le département telles que <em>Trithemis annulata</em>.</p>
                    <p>Nos prospections nous amènent parfois également à découvrir la présence d&apos;espèces considérées comme disparues du département à l&apos;image de <em>Sympetrum depressiusculum</em>.</p>
                    <p>Le département abrite une importante population de <em>Coenagrion mercuriale</em>, espèce protégée et menacée (classée VU sur la liste rouge mondiale) essentiellement présente en Europe de l&apos;ouest.</p>
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
                    <h3>Espèce emblématique du Rhône</h3>
                    <p>Le gomphe à pattes jaunes (<em>Stylurus flavipes</em>) est une espèce protégée présente le long du Rhône et de la Saône. Sa sensibilité à la pollution thermique, son aire de répartition restreinte en France ainsi que sa discrétion au stade imago font de lui une espèce rare à observer.</p>
                    <p>Elle fréquente les grandes rivières et les fleuves non-aménagés à fond sableux, limoneux ou vaseux. Ses populations régressent en cas de pollution.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Stylurus flavipes" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/rhone/stylurus-flavipes.jpg" />
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
                  <img alt="Activités Rhône" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/rhone/activites.jpg" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Co-coordinateurs</h3>
                    <p>Sympetrum compte 4 co-coordinateurs dans le Rhône.</p>
                  </div>
                  <div className="about-text">
                    <ul>
                      <li><i className="fa-solid fa-circle-check"></i>Julien BOUNIOL</li>
                      <li><i className="fa-solid fa-circle-check"></i>Aurélie COUET</li>
                      <li><i className="fa-solid fa-circle-check"></i>Hugo TAURU</li>
                      <li><i className="fa-solid fa-circle-check"></i>Hugo ROBUSCHI</li>
                      <p>Contact : <a href="mailto:coordo69.sympetrum@gmail.com">coordo69.sympetrum@gmail.com</a></p>
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
                    <p>Ateliers de détermination d&apos;exuvies, animations, prospections naturalistes, conférences... La délégation du Rhône vous propose de nombreuses activités autour des odonates.</p>
                    <p>Pour annoncer nos activités, partager nos photos ou encore s&apos;entraider à déterminer des espèces, nous utilisons l&apos;application Discord. Lien d&apos;invitation : <a href="https://discord.gg/JTWDUr886d" target="_blank">https://discord.gg/JTWDUr886d</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Coenagrion mercuriale" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/rhone/coenagrion-mercuriale.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
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
                  <img alt="Cartographie Rhône" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/rhone.png" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Zones à prospecter</h3>
                    <p>Le département compte de nombreuses zones sur lesquelles nous manquons de données. Afin d&apos;avoir une meilleure connaissance de la localisation précise des espèces et de leurs populations, voici une cartographie des zones prioritaires à prospecter.</p>
                    <p>À bientôt sur le terrain.</p>
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
            <h2>Derniers articles Rhône</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
