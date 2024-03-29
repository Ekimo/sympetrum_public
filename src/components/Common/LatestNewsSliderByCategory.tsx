import React from "react";
import SwiperNews from "./SwiperNews";
import { FullDataArticle } from "../../../libs/utils/definitions";

export default async function LatestNewsSliderByCategory({
  data,
}: {
  data: FullDataArticle[];
}) {
  return (
    <>
      <SwiperNews lastestNews={data} />
    </>
  );
}
