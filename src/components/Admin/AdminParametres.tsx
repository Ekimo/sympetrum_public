"use client";

import React from "react";
import { updateSettings } from "../../../libs/action";
import { FactType } from "../../../libs/utils/definitions";
import { toast } from "react-toastify";

const AdminParametres: React.FC<{ facts: FactType }> = ({ facts }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await updateSettings(formData);
      toast.success("Données modifiées avec succès");
    } catch (error) {
      toast.error("Une erreur est survenue");
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
                    <div className="col-lg-6">
                      Adhérents
                      <div className="form-group">
                        <input
                          defaultValue={facts?.members || 0}
                          type="number"
                          step="1"
                          name="members"
                          placeholder="Adhérents"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Données odonates
                      <div className="form-group">
                        <input
                          defaultValue={facts?.odonates_data || 0}
                          type="number"
                          step="1"
                          name="odonates_data"
                          placeholder="Données odonates"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Actions
                      <div className="form-group">
                        <input
                          defaultValue={facts?.actions || 0}
                          type="number"
                          step="1"
                          name="actions"
                          placeholder="Actions"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      Revues publiées
                      <div className="form-group">
                        <input
                          defaultValue={facts?.posted_publications || 0}
                          type="number"
                          step="1"
                          name="posted_publications"
                          placeholder="Revues publiées"
                          className="form-control"
                          required
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

export default AdminParametres;
