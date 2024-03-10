"use client";

import { toast } from "react-toastify";
import { createTag } from "../../../../libs/action";

const AdminCreateTag: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createTag(formData);
      toast.success("Le tag a été créé");
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
          <div className="article-content">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Nom du tag
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Nom du tag"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Créer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateTag;
