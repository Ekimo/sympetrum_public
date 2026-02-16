import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import DepartmentSection from "@/components/Odonates/DepartmentSection";
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

      <div className="dept-page-wrapper">
        {/* Présentation du département */}
        <DepartmentSection
          title="Le Rhône"
          titleLevel="h2"
          showDivider={false}
          imagePosition="right"
          images={[
            {
              src: "/images/departements/rhone/paysage.jpg",
              alt: "Paysage du Rhône",
              credit: "Aurélien Labroche",
            },
          ]}
        >
          <div className="dept-first-section">
            <p>
              Encadré par le Massif Central à l&apos;ouest et les premiers
              contreforts du Jura à l&apos;est, le département du Rhône est un
              véritable carrefour géographique. Avec le Beaujolais au nord, les
              Monts d&apos;Or au centre, les Monts du Lyonnais au sud-ouest et la
              partie septentionale du Pilat au sud, notre département dispose
              d&apos;une diversité de milieux significative.
            </p>
            <p>
              Chef-lieu du département, la ville de Lyon se situe à la confluence
              entre la Saône et le Rhône.
            </p>
          </div>
        </DepartmentSection>

        {/* Contexte odonatologique */}
        <DepartmentSection
          title="Contexte odonatologique"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/rhone/trithemis-annulata.jpg",
              alt: "Trithemis annulata",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/rhone/coenagrion-mercuriale.jpg",
              alt: "Coenagrion mercuriale",
              credit: "Loup Noally",
            },
            {
              src: "/images/departements/rhone/sympetrum-depressiusculum.jpg",
              alt: "Sympetrum depressiusculum",
              credit: "Samuel Mesnil",
            },
          ]}
        >
          <p>
            <strong>75 espèces</strong> ont été inventoriées dans le Rhône. Nos
            efforts de prospection se concentrent sur l&apos;actualisation de la
            présence d&apos;espèces à enjeux telles que{" "}
            <em>Cordulegaster bidentata</em> (classé VU en Rhône-Alpes, 2014) et
            sur les nouvelles espèces présentes sur le département telles que{" "}
            <em>Trithemis annulata</em>.
          </p>
          <p>
            Nos prospections nous amènent parfois également à découvrir la
            présence d&apos;espèces considérées comme disparues du département à
            l&apos;image de <em>Sympetrum depressiusculum</em>.
          </p>
          <p>
            Le département abrite une importante population de{" "}
            <em>Coenagrion mercuriale</em>, espèce protégée et menacée (classée
            VU sur la liste rouge mondiale) essentiellement présente en Europe de
            l&apos;ouest.
          </p>
        </DepartmentSection>

        {/* Espèce emblématique */}
        <DepartmentSection
          title="Espèce emblématique du Rhône"
          imagePosition="right"
          images={[
            {
              src: "/images/departements/rhone/stylurus-flavipes.jpg",
              alt: "Stylurus flavipes - Gomphe à pattes jaunes",
              credit: "Loup Noally",
            },
          ]}
        >
          <p>
            Le gomphe à pattes jaunes (<em>Stylurus flavipes</em>) est une
            espèce protégée présente le long du Rhône et de la Saône. Sa
            sensibilité à la pollution thermique, son aire de répartition
            restreinte en France ainsi que sa discrétion au stade imago font de
            lui une espèce rare à observer.
          </p>
          <p>
            Elle fréquente les grandes rivières et les fleuves non-aménagés à
            fond sableux, limoneux ou vaseux. Ses populations régressent en cas
            de pollution.
          </p>
        </DepartmentSection>

        {/* Co-coordinateurs */}
        <DepartmentSection
          title="Co-coordinateurs"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/rhone/activites.jpg",
              alt: "Co-coordinateurs du Rhône",
            },
          ]}
          imageShape="circle"
        >
          <p>
            Sympetrum compte 4 co-coordinateurs dans le Rhône.
          </p>
          <ul className="dept-coordinators-list">
            <li>
              <i className="fa-solid fa-circle-check"></i>Julien BOUNIOL
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Aurélie COUET
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Hugo TAURU
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Hugo ROBUSCHI
            </li>
          </ul>
          <p className="dept-contact-link">
            Contact :{" "}
            <a href="mailto:coordo69.sympetrum@gmail.com">
              coordo69.sympetrum@gmail.com
            </a>
          </p>
        </DepartmentSection>

        {/* Activités */}
        <DepartmentSection
          title="Activités"
          imagePosition="right"
        >
          <p>
            Ateliers de détermination d&apos;exuvies, animations, prospections
            naturalistes, conférences... La délégation du Rhône vous propose de
            nombreuses activités autour des odonates.
          </p>
          <p>
            Pour annoncer nos activités, partager nos photos ou encore
            s&apos;entraider à déterminer des espèces, nous utilisons
            l&apos;application Discord.
          </p>
          <p>
            Lien d&apos;invitation :{" "}
            <a href="https://discord.gg/JTWDUr886d" target="_blank">
              https://discord.gg/JTWDUr886d
            </a>
          </p>
        </DepartmentSection>

        {/* Zones à prospecter */}
        <DepartmentSection
          title="Zones à prospecter"
          imagePosition="left"
          images={[
            {
              src: "/images/departements/carto/rhone.jpg",
              alt: "Cartographie des zones à prospecter dans le Rhône",
            },
          ]}
        >
          <p>
            Le département compte de nombreuses zones sur lesquelles nous
            manquons de données. Afin d&apos;avoir une meilleure connaissance de
            la localisation précise des espèces et de leurs populations, voici
            une cartographie des zones prioritaires à prospecter.
          </p>
          <p>À bientôt sur le terrain.</p>
        </DepartmentSection>
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
