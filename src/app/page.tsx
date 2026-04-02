import React from "react";
import MainBanner from "../components/HomePage/MainBanner";
import About from "../components/HomePage/About";
import Facts from "../components/Common/Facts";
import Team from "../components/Common/Team";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import Navbar from "@/components/Layouts/Navbar";
import CtaAreaDoc from "@/components/Common/CtaAreaDoc";
import { fetchFacts } from "../../libs/data/public/common";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await fetchFacts();
  return (
    <>
      <Navbar />

      <MainBanner />

      <About youtubeUrl={settings?.youtube_url} />

      <Facts />

      <Team
        teamData={
          settings
            ? [
                {
                  image: settings.team_image_1,
                  name: settings.team_title_1,
                  content: settings.team_content_1,
                },
                {
                  image: settings.team_image_2,
                  name: settings.team_title_2,
                  content: settings.team_content_2,
                },
                {
                  image: settings.team_image_3,
                  name: settings.team_title_3,
                  content: settings.team_content_3,
                },
              ]
            : undefined
        }
      />

      <LatestNewsSlider />

      <CtaAreaDoc />
    </>
  );
}
