"use client";

import React from "react";
import Link from "next/link";
import Tiptap from "@/components/Common/Tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import { DepartmentSection } from "../../../../libs/utils/definitions";
import { toast } from "react-toastify";
import { updateDepartmentSection } from "../../../../libs/action";
import he from "he";

const AdminEditDepartementSection: React.FC<{
  section: DepartmentSection;
  departmentSlug: string;
  backUrl?: string;
}> = ({ section, departmentSlug, backUrl }) => {
  const sectionsUrl = backUrl || `/admin/departements/${departmentSlug}`;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      LinkExtension.configure({
        autolink: true,
      }),
    ],
    content: he.decode(section.content),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = editor?.getHTML();

    if (!content) {
      toast.error("Merci de saisir du contenu pour cette section");
      return;
    }

    try {
      await updateDepartmentSection(
        section.id,
        departmentSlug,
        formData,
        content
      );
      toast.success("Section modifiée avec succès");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="content-details">
        <Link
          href={sectionsUrl}
          style={{ marginBottom: "20px", display: "inline-block" }}
        >
          &larr; Retour aux sections
        </Link>

        <div className="article-content">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="title" className="form-label">
                      Titre de la section
                    </label>
                    <input
                      defaultValue={section.title}
                      id="title"
                      type="text"
                      name="title"
                      placeholder="Titre de la section"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="image_url" className="form-label">
                      URL de l&apos;image (créez-la depuis
                      &quot;Médiathèque&quot;, laissez vide pour une section
                      texte seul)
                    </label>
                    <input
                      defaultValue={section.image_url}
                      type="text"
                      id="image_url"
                      name="image_url"
                      placeholder="URL de l'image (500x750px)"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="image_alt" className="form-label">
                      Texte alternatif de l&apos;image
                    </label>
                    <input
                      defaultValue={section.image_alt}
                      type="text"
                      id="image_alt"
                      name="image_alt"
                      placeholder="Description de l'image"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="image_credit" className="form-label">
                      Crédits photo
                    </label>
                    <input
                      defaultValue={section.image_credit}
                      type="text"
                      id="image_credit"
                      name="image_credit"
                      placeholder="Crédits : Prénom Nom"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Tiptap editor={editor} />

            <button type="submit" className="btn btn-primary mt-10">
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditDepartementSection;
