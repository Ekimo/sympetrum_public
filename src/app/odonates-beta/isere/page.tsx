import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";
import { Metadata } from "next";
import { fetchLastByCategory } from "../../../../libs/data/public/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates d'Isère",
  description:
    "Découvrez les différentes informations, espèces et synthèses sur les odonates d'Isère.",
};

export default async function Page() {
  const lastestNews = await fetchLastByCategory("isere");
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de l'Isère"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        {/* Présentation */}
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>L&apos;Isère</h2>
                    <p>Le département de l&apos;Isère compte <strong>78 espèces</strong> d&apos;odonates recensées.</p>
                  </div>
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
                  <img alt="Cartographie Isère" loading="lazy" width="500" height="750" className="rounded-10" src="/images/departements/carto/isere.png" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Coordination</h3>
                    <p>Sympetrum compte 3 co-coordinateurs en Isère :</p>
                  </div>
                  <div className="about-text">
                    <ul>
                      <li><i className="fa-solid fa-circle-check"></i>Nicolas SOUVIGNET</li>
                      <li><i className="fa-solid fa-circle-check"></i>Cédric JACQUIER</li>
                      <li><i className="fa-solid fa-circle-check"></i>Angélique PRUVOST</li>
                    </ul>
                    <p className="italic">Anciens coordonnateurs : Aurélien Bourdin, Mathieu Juton, Cyrille Deliry et David Loose.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="about-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h3>Informations complémentaires</h3>
                  </div>
                  <p>Liste rouge des Odonates de l&apos;Isère (Deliry &amp; al. 2013) : valide jusqu&apos;en 2024 – <Link href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf" target="_blank">PDF</Link></p>
                  <p>Versions antérieures (Loose 1987, GRPLS 1992, Deliry 2008)</p>

                  <div className="table-responsive mt-30">
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
                          <td className="italic">Coenagrion lunulatum, Sympecma paedisca</td>
                        </tr>
                        <tr>
                          <th>CR</th>
                          <td className="italic">Gomphus simillimus, <span className="focus">Leucorrhinia pectoralis</span>, Sympetrum depressiusculum</td>
                        </tr>
                        <tr>
                          <th>EN</th>
                          <td className="italic">Coenagrion pulchellum, Lestes dryas, <span className="focus">Leucorrhinia albifrons, Leucorrhinia caudalis</span>, Somatochlora arctica, Stylurus flavipes</td>
                        </tr>
                        <tr>
                          <th>VU</th>
                          <td className="italic">Coenagrion hastulatum, Cordulegaster bidentata, Epitheca bimaculata, Erythromma najas, Leucorrhinia dubia, Somatochlora alpestris, Somatochlora metallica, Sympetrum danae, Sympetrum flaveolum, Sympetrum meridionale, Sympetrum vulgatum</td>
                        </tr>
                        <tr>
                          <th>NT</th>
                          <td className="italic">Aeshna grandis, Aeshna juncea, Brachytron pratense, Coenagrion mercuriale, Coenagrion scitulum, Cordulia aenea, Gomphus vulgatissimus, Ischnura pumilio, Lestes barbarus, Lestes virens, Somatochlora flavomaculata</td>
                        </tr>
                        <tr>
                          <th>DD</th>
                          <td className="italic">Ophiogomphus cecilia <span className="reset-style">(DD 2015) [1]</span>, Oxygastra curtisii <span className="reset-style">(CR ?)</span>, Platycnemis acutipennis <span className="reset-style">(CR ?)</span>, Sympetrum pedemontanum <span className="reset-style">(CR ?)</span></td>
                        </tr>
                        <tr>
                          <th>NA</th>
                          <td className="italic">Hemianax ephippiger, Lestes macrostigma, Onychogomphus uncatus, Trithemis annulata</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="focus">Les espèces mises en évidence sont l&apos;objet de suivis particuliers en Isère</p>
                    <p>[1] <em>Ophiogomphus cecilia</em> est attesté par une photographie de Laurent Berger faite en 2015 à Saint-Romain-de-Jalionas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dernières synthèses */}
        <div className="container">
          <div className="services-details-info">
            <h3>Dernières synthèses</h3>
            <ul>
              <li>Liste rouge – <strong>Deliry C. &amp; le Groupe Sympetrum 2013</strong> – Liste Rouge des Odonates de Rhône-Alpes &amp; Dauphiné 2013. – Col. Concepts &amp; Méthodes, Groupe Sympetrum, Histoires Naturelles, n°25bis. – <Link href="http://sympetrum.fr/wp-content/uploads/2023/02/hn25bis.pdf" target="_blank">PDF</Link></li>
              <li>Atlas – <strong>Deliry C. &amp; le Groupe Sympetrum 2014</strong> – Nouvel Atlas des Libellules de l&apos;Isère. – Concepts &amp; Méthodes, Sympetrum.</li>
              <li>Plan départemental – <strong>Deliry C. 2010</strong> – Observatoire des Odonates de l&apos;Isère. – Doc. GRPLS.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Isère</h2>
          </div>
          {lastestNews?.articles && (
            <LatestNewsSliderByCategory data={lastestNews.articles} />
          )}
        </div>
      </div>
    </>
  );
}
