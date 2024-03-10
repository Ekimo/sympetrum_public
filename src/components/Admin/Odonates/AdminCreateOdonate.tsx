"use client";

import React from "react";
import { createOdonate } from "../../../../libs/action";
import { toast } from "react-toastify";

export default function AdminCreateOdonate() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createOdonate(formData);
      toast.success("Données ajoutées avec succès");
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
                      Nom scientifique
                      <div className="form-group">
                        <input
                          type="text"
                          name="scientific_name"
                          placeholder="Nom scientifique"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Auteur et année de description
                      <div className="form-group">
                        <input
                          type="text"
                          name="author_and_year"
                          placeholder="Auteur et année de description"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Nom français
                      <div className="form-group">
                        <input
                          type="text"
                          name="french_name"
                          placeholder="Nom français"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Sous-ordre/infra-ordre
                      <div className="form-group">
                        <input
                          type="text"
                          name="suborder"
                          placeholder="Sous-ordre/infra-ordre"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Famille
                      <div className="form-group">
                        <input
                          type="text"
                          name="family"
                          placeholder="Famille"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Lien associé (optionnel)
                      <div className="form-group">
                        <input
                          type="text"
                          name="link"
                          placeholder="Lien (optionnel)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Ajouter
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
}
