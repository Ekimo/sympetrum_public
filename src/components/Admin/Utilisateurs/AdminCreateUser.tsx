"use client";

import React from "react";
import { createUser } from "../../../../libs/action";
import { toast } from "react-toastify";

export default function AdminCreateUser() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createUser(formData);
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
                      Nom
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nom"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      Email
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Mot de passe
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Mot de passe"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Rôle
                      <div className="form-group">
                        <select
                          name="role"
                          className="form-control"
                          defaultValue={0}
                        >
                          <option value="2">Contributeur</option>
                          <option value="1">Rédacteur</option>
                          <option value="0">Admin</option>
                        </select>
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
