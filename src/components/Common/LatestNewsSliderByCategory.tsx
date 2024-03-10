import React from "react";
import SwiperNews from "./SwiperNews";
import { fetchLastByCategory } from "../../../libs/data/public/blog";

const LatestNewsSliderByCategory: React.FC<{ departement: string }> = async ({
  departement,
}) => {
  const lastestNews = await fetchLastByCategory(departement);

  if (!lastestNews) {
    return "";
  }

  return (
    <>
      <SwiperNews lastestNews={lastestNews?.articles} />
    </>
  );
};

export default LatestNewsSliderByCategory;
