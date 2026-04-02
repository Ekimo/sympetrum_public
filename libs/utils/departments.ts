import { DepartmentConfig } from "./definitions";

export const DEPARTMENTS: Record<string, DepartmentConfig> = {
  ain: {
    slug: "ain",
    name: "l'Ain",
    pageTitle: "Odonates de l'Ain",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de l'Ain.",
    categorySlug: "ain",
  },
  ardeche: {
    slug: "ardeche",
    name: "l'Ardèche",
    pageTitle: "Odonates de l'Ardèche",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de l'Ardèche.",
    categorySlug: "ardeche",
  },
  drome: {
    slug: "drome",
    name: "la Drôme",
    pageTitle: "Odonates de la Drôme",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Drôme.",
    categorySlug: "drome",
  },
  "haute-savoie": {
    slug: "haute-savoie",
    name: "la Haute-Savoie",
    pageTitle: "Odonates de la Haute-Savoie",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Haute-Savoie.",
    categorySlug: "haute-savoie",
  },
  isere: {
    slug: "isere",
    name: "l'Isère",
    pageTitle: "Odonates de l'Isère",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates d'Isère.",
    categorySlug: "isere",
  },
  loire: {
    slug: "loire",
    name: "la Loire",
    pageTitle: "Odonates de la Loire",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Loire.",
    categorySlug: "loire",
  },
  rhone: {
    slug: "rhone",
    name: "le Rhône",
    pageTitle: "Odonates du Rhône",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates du Rhône.",
    categorySlug: "rhone",
  },
  savoie: {
    slug: "savoie",
    name: "la Savoie",
    pageTitle: "Odonates de la Savoie",
    metaDescription:
      "Découvrez les différentes informations, espèces et synthèses sur les odonates de la Savoie.",
    categorySlug: "savoie",
  },
};

export const VALID_DEPARTMENT_SLUGS = Object.keys(DEPARTMENTS);
