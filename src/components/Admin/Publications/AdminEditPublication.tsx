"use client";

import React from "react";
import { updatePublication } from "../../../../libs/action";
import { toast } from "react-toastify";
import { Publication } from "../../../../libs/utils/definitions";

const AdminEditPublication: React.FC<{ publication: Publication }> = ({
  publication,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await updatePublication(publication.id, formData);
      toast.success("Données modifiées avec succès");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="contact-form-box">
                  <div className="row">
                    <div className="col-lg-12">
                      Titre (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.title}
                          type="text"
                          name="title"
                          placeholder="Titre (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Auteur (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.author}
                          type="text"
                          name="author"
                          placeholder="Auteur (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      (Année) (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.year}
                          type="text"
                          name="year"
                          placeholder="(Année) (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Revue (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.journal}
                          type="text"
                          name="journal"
                          placeholder="Revue (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Livre (citation) (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.book_citation}
                          type="text"
                          name="book_citation"
                          placeholder="Livre (citation) (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Volume (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.volume}
                          type="text"
                          name="volume"
                          placeholder="Volume (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Numéro (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.number}
                          type="text"
                          name="number"
                          placeholder="Numéro (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Editeur (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.editor}
                          type="text"
                          name="editor"
                          placeholder="Editeur (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Remarque complémentaire (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.additional_comments}
                          type="text"
                          name="additional_comments"
                          placeholder="Remarque complémentaire (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Lien/DOI (optionnel)
                      <div className="form-group">
                        <input
                          defaultValue={publication.link}
                          type="text"
                          name="link"
                          placeholder="Lien/DOI (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Modifier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditPublication;
