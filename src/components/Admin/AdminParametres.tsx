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
                  <h4>Chiffres clés</h4>
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
                  </div>

                  <hr style={{ margin: "20px 0" }} />
                  <h4>Vidéo</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      URL vidéo YouTube (format embed)
                      <div className="form-group">
                        <input
                          defaultValue={facts?.youtube_url || ""}
                          type="text"
                          name="youtube_url"
                          placeholder="https://www.youtube.com/embed/..."
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <hr style={{ margin: "20px 0" }} />
                  <h4>Équipe - Carte 1</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      Titre
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_title_1 || ""}
                          type="text"
                          name="team_title_1"
                          placeholder="Membres du bureau"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      URL image (depuis Médiathèque)
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_image_1 || ""}
                          type="text"
                          name="team_image_1"
                          placeholder="/images/team/team11.jpg"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      Contenu (HTML : utilisez &lt;strong&gt; pour le gras,
                      &lt;br&gt; pour les retours à la ligne)
                      <div className="form-group">
                        <textarea
                          defaultValue={facts?.team_content_1 || ""}
                          name="team_content_1"
                          className="form-control"
                          rows={4}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <hr style={{ margin: "20px 0" }} />
                  <h4>Équipe - Carte 2</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      Titre
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_title_2 || ""}
                          type="text"
                          name="team_title_2"
                          placeholder="Membres du CA"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      URL image (depuis Médiathèque)
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_image_2 || ""}
                          type="text"
                          name="team_image_2"
                          placeholder="/images/team/team11.jpg"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      Contenu
                      <div className="form-group">
                        <textarea
                          defaultValue={facts?.team_content_2 || ""}
                          name="team_content_2"
                          className="form-control"
                          rows={4}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <hr style={{ margin: "20px 0" }} />
                  <h4>Équipe - Carte 3</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      Titre
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_title_3 || ""}
                          type="text"
                          name="team_title_3"
                          placeholder="Coordinateurs"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      URL image (depuis Médiathèque)
                      <div className="form-group">
                        <input
                          defaultValue={facts?.team_image_3 || ""}
                          type="text"
                          name="team_image_3"
                          placeholder="/images/team/team11.jpg"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      Contenu
                      <div className="form-group">
                        <textarea
                          defaultValue={facts?.team_content_3 || ""}
                          name="team_content_3"
                          className="form-control"
                          rows={4}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12 mt-20">
                    <button type="submit" className="btn btn-primary">
                      Modifier
                    </button>
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
