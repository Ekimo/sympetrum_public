import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
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
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>72 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2022</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2022</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>NC</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Noally Loup</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Julien Sthème de Jubécourt, Yoann Boeglin
            et André Ulmer.
            <br />
            023 – En projet : Rencontres odonatologiques ligériennes.. (à
            suivre). Les précédentes rencontres ont eu lieu le 16 avril 2021 et
            ont permis la mise en place d’une dynamique collective de rédaction
            de l’Atlas des Odonates de la Loire. La Liste Rouge préparée pour
            l’Atlas de 2022 est en cours de rédaction.
          </p>
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
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de la Loire (Deliry & al. 2022) : valide
            jusqu&apos;en 2033 –{" "}
            <Link
              href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 2008, Deliry & al. 2013, Sthème de
            Jubécourt & al.)
          </p>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Catégorie</th>
                  <th scope="col">Espèce(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>RE</th>
                  <td className="italic">Leucorrhinia caudalis</td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Aeshna grandis, Coenagrion hastulatum{" "}
                    <span className="reset-style">(probablement éteint)</span>,
                    <span className="focus">Coenagrion ornatum</span>,
                    Coenagrion pulchellum, Epitheca bimaculata, Leucorrhinia
                    dubia, Leucorrhinia pectoralis, Ophiogomphus cecilia,{" "}
                    <span className="focus">Oxygastra curtisii</span>,
                    Somatochlora arctica, Somatochlora metallica, Sympetrum
                    danae, Sympetrum flaveolum,{" "}
                    <span className="focus">Sympetrum pedemontanum</span>
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Erythromma najas, Lestes dryas,{" "}
                    <span className="focus">Sympetrum depressiusculum</span>
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Aeshna juncea, Calopteryx haemorrhoidalis, Calopteryx
                    xanthostoma,{" "}
                    <span className="focus">Cordulegaster bidentata</span>,
                    Gomphus simillimus
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna isoceles, Boyeria irene, Brachytron pratense,
                    Ceriagrion tenellum,{" "}
                    <span className="focus">Coenagrion mercuriale</span>,
                    Ischnura pumilio, Lestes virens
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Platycnemis acutipennis, Stylurus flavipes, Sympetrum
                    vulgatum
                  </td>
                </tr>
                <tr>
                  <th>NE</th>
                  <td>
                    Trithemis annulata{" "}
                    <span className="reset-style">(nouvelle en 2023)</span>
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">Hemianax ephippiger</td>
                </tr>
              </tbody>
            </table>
            <p className="focus">
              Les espèces mises en évidence sont l&apos;objet de suivis
              particuliers dans la Loire
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-details-info">
          <h3>Dernières synthèses</h3>

          <ul>
            <li>
              Atlas et liste rouge –{" "}
              <strong>Deliry C., Noally L. & Ulmer A. (coord.) 2022</strong> –
              Libellules et Demoiselles de la Loire. Atlas des Odonates du
              département de la Loire. – Groupe Sympetrum et FNE Loire : 256 pp.
              – [Avec Liste Rouge départementale]
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
