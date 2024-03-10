"use client";

import Link from "next/link";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
  button?: { name: string; anchor: string };
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  BGImage,
  button,
}) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
              {button && (
                <Link
                  href={`#${button.anchor}`}
                  className="btn btn-primary mt-30"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {button.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
