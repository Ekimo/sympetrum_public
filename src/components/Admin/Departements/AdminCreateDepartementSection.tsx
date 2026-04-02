"use client";

import React from "react";
import Link from "next/link";
import Tiptap from "@/components/Common/Tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import { toast } from "react-toastify";
import { createDepartmentSection } from "../../../../libs/action";

const AdminCreateDepartementSection: React.FC<{
  departmentSlug: string;
  backUrl?: string;
}> = ({ departmentSlug, backUrl }) => {
  const sectionsUrl = backUrl || `/admin/departements/${departmentSlug}`;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      LinkExtension.configure({
        autolink: true,
      }),
    ],
    content: "<p>Contenu de la section...</p>",
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
      await createDepartmentSection(departmentSlug, formData, content);
      toast.success("Section créée avec succès");
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
              Créer la section
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateDepartementSection;
