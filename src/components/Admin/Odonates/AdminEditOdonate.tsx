"use client";

import React from "react";
import { updateOdonate } from "../../../../libs/action";
import { toast } from "react-toastify";
import { Odonate } from "../../../../libs/utils/definitions";

const AdminEditOdonate: React.FC<{ odonate: Odonate }> = ({ odonate }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await updateOdonate(odonate.id, formData);
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
                      Nom scientifique
                      <div className="form-group">
                        <input
                          defaultValue={odonate.scientific_name}
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
                          defaultValue={odonate.author_and_year}
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
                          defaultValue={odonate.french_name}
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
                          defaultValue={odonate.suborder}
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
                          defaultValue={odonate.family}
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
                          defaultValue={odonate.link}
                          type="text"
                          name="link"
                          placeholder="Lien (optionnel)"
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

export default AdminEditOdonate;
