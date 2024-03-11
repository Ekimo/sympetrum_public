import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Link from "next/link";
import LatestNewsSliderByCategory from "@/components/Common/LatestNewsSliderByCategory";

export default async function Page() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Odonates de Haute-Savoie"
        BGImage="/images/page-banner1.jpg"
      />

      <div className="pb-40">
        <div className="container">
          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Données</h4>
              <span>66 espèces</span>
            </div>

            <div className="single-info-box">
              <h4>Liste rouge</h4>
              <span>2013</span>
            </div>

            <div className="single-info-box">
              <h4>Atlas</h4>
              <span>2020</span>
            </div>

            <div className="single-info-box">
              <h4>Plan départemental</h4>
              <span>2021</span>
            </div>

            <div className="single-info-box">
              <h4>Coordination</h4>
              <span>Marie Lamouille-Hébert, Macha Joanin & David Leclerc</span>
            </div>
          </div>
          <p className="italic">
            Anciens coordonnateurs : Bernard Bal, Alexandre Guillemot, Cyrille
            Deliry
          </p>
        </div>
      </div>

      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles Haute-Savoie</h2>
          </div>
          <LatestNewsSliderByCategory departement="haute-savoie" />
        </div>
      </div>
      <div className="container pb-70"></div>

      <div className="pb-40">
        <div className="container">
          <h3>Informations complémentaires</h3>

          <p>
            Liste rouge des Odonates de la Haute-Savoie (Lamouille-Hébert 2020)
            : valide jusqu&apos;en 2031 –{" "}
            <Link
              href="http://www.sympetrum.fr/rad/wp-content/uploads/2021/12/atlas.vf_.pdf"
              target="_blank"
            >
              PDF
            </Link>
            <br />
            Versions antérieures (Deliry 1987, 2006, 2008, Deliry & al. 2013)
            <br />
            Pays genevois – Carron & Wermeille (2009)
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
                  <td className="italic">
                    Lestes virens, Sympetrum meridionale{" "}
                    <span className="reset-style">
                      (en visite, mais ne se reproduit plus : cf. NA ?)
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>CR</th>
                  <td className="italic">
                    Coenagrion pulchellum, Leucorrhinia albifrons
                  </td>
                </tr>
                <tr>
                  <th>EN</th>
                  <td className="italic">
                    Aeshna caerulea{" "}
                    <span className="reset-style">(EN 2014)</span>, Coenagrion
                    hastulatum, Coenagrion mercuriale, Lestes dryas, Oxygastra
                    curtisii, Sympetrum danae
                  </td>
                </tr>
                <tr>
                  <th>VU</th>
                  <td className="italic">
                    Ceriagrion tenellum, Cordulegaster bidentata, Erythromma
                    najas, Gomphus vulgatissimus, Lestes sponsa, Leucorrhinia
                    dubia, Somatochlora alpestris, Somatochlora arctica,
                    Somatochlora metallica, Sympetrum flaveolum{" "}
                    <span className="reset-style">(statut aggravé depuis)</span>
                    , Sympetrum vulgatum
                  </td>
                </tr>
                <tr>
                  <th>NT</th>
                  <td className="italic">
                    Aeshna grandis, Aeshna isoceles, Aeshna juncea, Brachytron
                    pratense, Cordulia aenea, Ischnura pumilio, Somatochlora
                    flavomaculata
                  </td>
                </tr>
                <tr>
                  <th>DD</th>
                  <td className="italic">
                    Coenagrion scitulum, Gomphus simillimus{" "}
                    <span className="reset-style">(DD 2017)</span>, Ophiogomphus
                    cecilia, Orthetrum albistylum, Stylurus flavipes{" "}
                    <span className="reset-style">(DD 2020)</span>, Sympetrum
                    depressiusculum{" "}
                    <span className="reset-style">(probablement CR)</span>,
                    Sympetrum pedemontanum
                  </td>
                </tr>
                <tr>
                  <th>NA</th>
                  <td className="italic">
                    Calopteryx xanthostoma, Lestes barbarus
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              [1] Les espèces suivantes (listées in Deliry & al. 2013) n’ont pas
              été reprises sur la liste départementale en 2020 (Lamouille-Hébert
              2020) qui ne « compte » que « 60 espèces » au lieu de 66 (tableau
              pp. 51 et seq.) [sic !] :{" "}
              <span className="italic">
                Aeshna affinis, Anax parthenope Cordulegaster boltonii,
                Onychomphus forcipatus, mais sont présentées dans le texte.
              </span>
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
              <strong>Lamouille-Hébert M. (coord.) 2020</strong> – Atlas des
              Odonates de Haute-Savoie. – FNE Haute-Savoie, Groupe Sympetrum,
              Aster, LPO Haute-Savoie, Département. -{" "}
              <Link
                href="http://www.sympetrum.fr/rad/wp-content/uploads/2021/12/atlas.vf_.pdf"
                target="_blank"
              >
                PDF
              </Link>
            </li>
            <li>
              Dossier Rouge n°65 –{" "}
              <strong>Lamouiller-Hébert M., Leclerc D. & Joanin M. 2023</strong>{" "}
              – Tourbière de la Colombière, plateau de Beauregard
              (Haute-Savoie). – Dossier Rouge n°65, Groupe Sympetrum. -{" "}
              <Link
                href="http://sympetrum.fr/wp-content/uploads/2023/03/Dossier_Rouge_65_VF.pdf"
                target="_blank"
              >
                PDF
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
