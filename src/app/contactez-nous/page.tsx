import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Newsletter from "../../components/Common/Newsletter";
import Navbar from "@/components/Layouts/Navbar";
import { Metadata } from "next";
import { fetchFacts } from "../../../libs/data/public/common";

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Contactez-nous",
  description:
    "Consultez notre page de contact pour toute question ou information concernant l'association Sympetrum. Nous sommes là pour vous aider.",
};

export default async function Page() {
  const settings = await fetchFacts();
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Contactez-nous"
        BGImage="/images/page-banner1.jpg"
      />

      <ContactInfo address={settings?.address} />

      <ContactForm />

      <div className="ptb-100">
        <Newsletter />
      </div>
    </>
  );
}
