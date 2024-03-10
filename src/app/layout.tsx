import React from "react";
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/all.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Global Style
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import Footer from "@/components/Layouts/Footer";

// For all body text font
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// For all heading font
const saira = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groupe Sympetrum - Odonates en Rhône-Alpes & Dauphiné",
  description:
    "Le Groupe de recherche et de protection des libellules Sympetrum est une association qui se consacre à la connaissance et la conservation des libellules ainsi que leurs habitats, les zones humides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${saira.variable}`}>
        {children}
        <Footer />
        <AosAnimation />
        <GoTop />
        <ToastContainer />
      </body>
    </html>
  );
}
