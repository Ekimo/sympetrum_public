import he from "he";
import { DepartmentSection } from "../../../libs/utils/definitions";

export default function DepartmentSections({
  sections,
}: {
  sections: DepartmentSection[];
}) {
  return (
    <>
      {sections.map((section, index) => {
        const isFirst = index === 0;
        const isTextOnly = !section.image_url;
        const isTextLeft = index % 2 === 0;

        return (
          <div
            key={section.id}
            className={`about-area ${isFirst ? "ptb-100" : "pb-100"}`}
          >
            <div className="container">
              <div className="row align-items-center">
                {isTextOnly ? (
                  <div className="col-lg-12">
                    <div className="about-content about-content-two">
                      <div className="section-title">
                        {isFirst ? (
                          <h2>{section.title}</h2>
                        ) : (
                          <h3>{section.title}</h3>
                        )}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: he.decode(section.content),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : isTextLeft ? (
                  <>
                    <div className="col-lg-7 col-md-12">
                      <div className="about-content about-content-two">
                        <div className="section-title">
                          {isFirst ? (
                            <h2>{section.title}</h2>
                          ) : (
                            <h3>{section.title}</h3>
                          )}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: he.decode(section.content),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                      <div className="about-image">
                        <img
                          alt={section.image_alt}
                          loading="lazy"
                          width="500"
                          height="750"
                          className="rounded-10"
                          src={section.image_url}
                        />
                        {section.image_credit && (
                          <span className="dept-credit">
                            {section.image_credit}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-5 col-md-12">
                      <div className="about-image">
                        <img
                          alt={section.image_alt}
                          loading="lazy"
                          width="500"
                          height="750"
                          className="rounded-10"
                          src={section.image_url}
                        />
                        {section.image_credit && (
                          <span className="dept-credit">
                            {section.image_credit}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <div className="about-content about-content-two">
                        <div className="section-title">
                          {isFirst ? (
                            <h2>{section.title}</h2>
                          ) : (
                            <h3>{section.title}</h3>
                          )}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: he.decode(section.content),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
