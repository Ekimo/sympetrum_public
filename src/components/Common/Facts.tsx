import Image from "next/image";

import map from "../../../public/images/map.png";
import { fetchFacts } from "../../../libs/data/public/common";
import { Fact } from "../../../libs/utils/definitions";

export default async function OdonateTable() {
  const facts = await fetchFacts();

  const FactsData: Fact[] = facts
    ? [
        {
          iconName: "fa-solid fa-users",
          number: facts.members.toString(),
          shortText: "Adhérents",
          aosDelay: "100",
        },
        {
          iconName: "fa-solid fa-database",
          number: facts.odonates_data.toString(),
          shortText: "Données odonates",
          aosDelay: "200",
        },
        {
          iconName: "fa-solid fa-list-check",
          number: facts.actions.toString(),
          shortText: "Actions",
          aosDelay: "300",
        },
        {
          iconName: "fa-solid fa-book-open",
          number: facts.posted_publications.toString(),
          shortText: "Revues publiées",
          aosDelay: "400",
        },
      ]
    : [];

  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Mais le Groupe Sympetrum, c&apos;est aussi</h2>
            <p>
              Des adhérents actifs, des observations Rhône-Alpines datant du
              XVIIIe siècle à nos jours mais aussi des actions de connaissances,
              formations et vulgarisations sans oublier les publications
              scientifiques et la rédaction d&#39;ouvrages sur les libellules.
            </p>
          </div>

          <div className="row justify-content-center">
            {FactsData &&
              FactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="funfact"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="map-bg">
            <Image src={map} alt="map" width={910} height={443} />
          </div>
        </div>
      </div>
    </>
  );
}
