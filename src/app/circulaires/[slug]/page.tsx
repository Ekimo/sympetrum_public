import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import { notFound } from "next/navigation";
import { fetchOneCirculaireBySlug } from "../../../../libs/data/public/circulaires";
import CirculaireContent from "@/components/circulaires/CirculaireContent";

export default async function Page({ params }: { params: { slug: string } }) {
  const circulaire = await fetchOneCirculaireBySlug(params.slug);

  if (!circulaire) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={circulaire.title}
        BGImage="/images/page-banner4.jpg"
      />

      <CirculaireContent circulaire={circulaire} />
    </>
  );
}
