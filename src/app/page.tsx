import React from "react";
import MainBanner from "../components/HomePage/MainBanner";
import About from "../components/HomePage/About";
import Facts from "../components/Common/Facts";
import Team from "../components/Common/Team";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import Navbar from "@/components/Layouts/Navbar";
import CtaAreaDoc from "@/components/Common/CtaAreaDoc";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Facts />

      <Team />

      <LatestNewsSlider />

      <CtaAreaDoc />
    </>
  );
}
