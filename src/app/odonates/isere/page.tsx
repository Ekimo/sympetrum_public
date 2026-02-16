import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
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
