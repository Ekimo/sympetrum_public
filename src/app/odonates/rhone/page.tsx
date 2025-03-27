import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
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
      <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h2>Le Rhône</h2>
                                <p>Encadré par le Massif Central à l’ouest et les premiers contreforts du Jura à l’est, le département du Rhône est un véritable carrefour géographique. Avec le Beaujolais au nord, les Monts d’Or au centre, les Monts du Lyonnais au sud-ouest et la partie septentionale du Pilat au sud, notre département dispose d’une diversité de milieux significative. Chef-lieu du département, la ville de Lyon se situe à la confluence entre la Saône et le Rhône.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/rhone.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/trithemis-annulata.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h3>Contexte odonatologique</h3>
                                <p>75 espèces ont été inventoriées dans le Rhône. Nos efforts de prospection se concentrent sur l’actualisation de la présence d’espèces à enjeux telles que Cordulegaster bidentata (classé VU en Rhône-Alpes, 2014) et sur les nouvelles espèces présentes sur le département telles que Trithemis annulata. Nos prospections nous amènent parfois également à découvrir la présence d’espèces considérées comme disparues du département à l’image de Sympetrum depressiusculum. Le département abrite une importante population de Coenagrion Mercuriale, espèce protégée et menacée (classée VU sur la liste rouge mondiale) essentiellement présente en Europe de l’ouest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h3>Espèce emblématique du Rhône</h3>
                                <p>Le gomphe à pattes jaunes (Stylurus flavipes) est une espèce protégée présente le long du Rhône et de la Saône. Sa sensibilité à la pollution thermique, son aire de répartition restreinte en France ainsi que sa discrétion au stade imago font de lui une espèce rare à observer. Elle fréquente les grandes rivières et les fleuves non-aménagés à fond sableux, limoneux ou vaseux. Ses populations régressent en cas de pollution.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/stylurus-flavipes.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/team/team11.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h3>Co-coordinateurs</h3>
                                <p>Sympetrum compte 4 co-coordinateurs dans le Rhône. Julien BOUNIOL Aurélie COUET Hugo TAURU Hugo ROBUSCHI Contact :coordo69.sympetrum@gmail.com</p>
                            </div>
                            <div className="about-text">
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i>Julien BOUNIOL</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Aurélie COUET</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Hugo TAURU</li>
                                    <li><i className="fa-solid fa-circle-check"></i>Hugo ROBUSCHI</li>
                                    <p>contact : coordo69.sympetrum@gmail.com</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h3>Activités</h3>
                                <p>Ateliers de détermination d’exuvies, animations, prospections naturalistes, conférences... La délégation du Rhône vous propose de nombreuses activités autour des odonates. Pour annoncer nos activités, partager nos photos ou encore s’entraider à déterminer des espèces, nous utilisons l’application Discord. Lien d’invitation : <a href="https://discord.gg/JTWDUr886d" target="_blank">https://discord.gg/JTWDUr886d</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/activites-rhone.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                        <div className="about-image">
                            <img alt="image" loading="lazy" width="500" height="750" decoding="async" data-nimg="1" className="rounded-10" src="/images/rhone-carto.jpg" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="about-content about-content-two">
                            <div className="section-title">
                                <h3>Zones à prospecter</h3>
                                <p>Le département compte de nombreuses zones sur lesquelles nous manquons de données. Afin d’avoir une meilleure connaissance de la localisation précise des espèces et de leurs populations, voici une cartographie des zones prioritaires à prospecter. A bientôt sur le terrain.</p>
                                <i>Légende : Nombre de données par commune (2015 - 2024)</i>
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
