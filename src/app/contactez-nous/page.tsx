import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Newsletter from "../../components/Common/Newsletter";
import Navbar from "@/components/Layouts/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Contactez-nous"
        BGImage="/images/page-banner1.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <div className="ptb-100">
        <Newsletter />
      </div>
    </>
  );
}
