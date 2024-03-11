import React from "react";
import SwiperNews from "./SwiperNews";
import { fetchLastByCategory } from "../../../libs/data/public/blog";

export default async function LatestNewsSliderByCategory({
  departement,
}: {
  departement: string;
}) {
  const lastestNews = await fetchLastByCategory(departement);

  if (!lastestNews) {
    return "";
  }

  return (
    <>
      <SwiperNews lastestNews={lastestNews?.articles} />
    </>
  );
}
