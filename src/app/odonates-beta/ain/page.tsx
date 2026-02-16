import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
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

      <div className="pb-40">
        {/* Présentation */}
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>L&apos;Ain</h2>
                    <p>Le département de l&apos;Ain (5 762 km²), au nord de la région AuRA, présente deux grandes entités, la chaîne du Jura, zone de collines et de montagne à l&apos;est, et les plaines et plateaux à l&apos;ouest. Au nord-est, le pays de Gex est un secteur de piémont incliné vers le bassin genevois.</p>
                    <p>Le Rhône et la Saône encadrent le département à l&apos;est, au sud et à l&apos;ouest, tandis que la rivière d&apos;Ain le traverse. Ces trois cours d&apos;eau et leurs affluents offrent les milieux lotiques tandis que les étangs de Bresse et de Dombes, les lacs du Bugey et les ballastières de la plaine de l&apos;Ain constituent les milieux lentiques.</p>
                    <p>On doit ajouter à ces derniers de grands marais (Lavours) et tourbières (Cerin) entre autres. Les autres milieux favorables aux libellules sont les mares qui ponctuent la Bresse et le Bugey, ainsi que les goyas, des mares prairiales d&apos;altitude.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Calopteryx haemorrhoidalis" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/ain/calopteryx-haemorrhoidalis.jpg" />
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
                  <img alt="Cordulegaster bidentata" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/ain/cordulegaster-bidentata.jpg" />
                  <span className="dept-credit">Crédits : Loup Noally</span>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Contexte odonatologique</h3>
                    <p>Un fleuve, de nombreuses rivières, des ruisseaux, des lacs, étangs et zones humides font de l&apos;Ain un département riche en odonates (116 501 données à la fin de 2024 et 897 observateurs). Des plaines aux plus hauts sommets de la chaîne du Jura, des milieux variés abritent une grande diversité d&apos;espèces.</p>
                    <p><strong>70 espèces</strong> sont connues du département, dont 3 qui n&apos;ont pas été revues depuis au moins 10 ans. Certaines espèces sont arrivées récemment (<em>Calopteryx haemorrhoidalis</em> en 2002, <em>Trithemis annulata</em> en 2023), d&apos;autres n&apos;ont plus été revues depuis plus de 10 ans (<em>Sympetrum danae</em> en 2005).</p>
                    <p>L&apos;ensemble du territoire est prospecté mais il reste des zones blanches et des communes sans données. Nos efforts se portent sur ces zones et sur certaines espèces rares ou menacées : les 4 <em>Leucorrhinia</em>, <em>Cordulegaster bidentata</em>, <em>Ophiogomphus cecilia</em> et <em>Somatochlora metallica</em>.</p>
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
                    <h3>Espèce emblématique de l&apos;Ain</h3>
                    <p>La Leucorrhine à gros thorax (<em>Leucorrhinia pectoralis</em>) est une espèce protégée dont l&apos;Ain est considéré comme le bastion en France, en particulier en Dombes. Elle est rare et vulnérable.</p>
                    <p>Un travail important de suivi et de conservation est mené par Sympetrum avec les acteurs locaux (N2000 en Dombes, par exemple). C&apos;est une espèce des étangs forestiers riches en végétation. Elle est sensible à l&apos;assèchement, donc menacée par le changement climatique.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <img alt="Leucorrhinia pectoralis" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/ain/leucorrhinia-pectoralis.jpg" />
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
                  <img alt="Cartographie des zones à prospecter dans l'Ain" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/ain.jpg" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Zones à prospecter</h3>
                    <p>L&apos;ensemble du territoire est prospecté mais il reste des zones blanches et des communes sans données. Afin d&apos;avoir une meilleure connaissance de la localisation précise des espèces et de leurs populations, voici une cartographie des zones prioritaires à prospecter.</p>
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
