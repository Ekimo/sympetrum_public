"use client";

import React from "react";

export interface SectionImage {
  src: string;
  alt: string;
  credit?: string;
}

interface DepartmentSectionProps {
  title: string;
  titleLevel?: "h2" | "h3";
  children: React.ReactNode;
  images?: SectionImage[];
  imagePosition?: "left" | "right";
  imageShape?: "rounded" | "circle";
  showDivider?: boolean;
}

export default function DepartmentSection({
  title,
  titleLevel = "h3",
  children,
  images,
  imagePosition = "right",
  imageShape = "rounded",
  showDivider = true,
}: DepartmentSectionProps) {
  const TitleTag = titleLevel;
  const hasImages = images && images.length > 0;

  const textCol = hasImages ? "col-lg-7 col-md-12" : "col-lg-12";
  const imageCol = "col-lg-5 col-md-12";

  const textBlock = (
    <div className={textCol}>
      <div className="about-content about-content-two">
        <div className="section-title">
          <TitleTag>{title}</TitleTag>
        </div>
        <div className="dept-section-text">{children}</div>
      </div>
    </div>
  );

  const imageBlock = hasImages ? (
    <div className={imageCol}>
      <div
        className={`dept-section-images ${images.length > 1 ? "dept-section-images--multi" : ""}`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`dept-section-img-wrapper ${imageShape === "circle" ? "dept-section-img--circle" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={imageShape === "circle" ? 300 : 600}
              height={imageShape === "circle" ? 300 : 400}
              className={imageShape === "circle" ? "" : "rounded-10"}
            />
            {img.credit && (
              <span className="dept-section-credit">
                Cr&eacute;dits : {img.credit}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <>
      {showDivider && (
        <div className="dept-section-divider">
          <hr />
        </div>
      )}
      <div className="about-area dept-section">
        <div className="container">
          <div className="row align-items-center">
            {imagePosition === "left" ? (
              <>
                {imageBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {imageBlock}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
