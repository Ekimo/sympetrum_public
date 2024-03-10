import React from "react";
import SwiperNews from "./SwiperNews";
import { fetchLastArticles } from "../../../libs/data/public/blog";

const LatestNewsSlider: React.FC = async () => {
  const lastestNews = await fetchLastArticles();
  return (
    <>
      <div className="blog-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Derniers articles</h2>
            <p>
              Les derniers articles rédigés par nos membres, vous aussi proposer
              vos articles !
            </p>
          </div>

          <SwiperNews lastestNews={lastestNews} />
        </div>
      </div>
    </>
  );
};

export default LatestNewsSlider;
