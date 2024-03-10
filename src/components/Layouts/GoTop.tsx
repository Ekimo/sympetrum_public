"use client";

import React, { useEffect, useState } from "react";

const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <i className="pe-7s-angle-up"></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
