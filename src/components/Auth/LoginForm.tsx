"use client";

import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { redirectAfterAuth } from "../../../libs/action";

const LoginForm: React.FC = () => {
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const options: AxiosRequestConfig = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      const response = await axios.post("/api/auth", formData, options);
      if (response.status === 200) {
        await redirectAfterAuth();
        toast.success("Connexion réussie.");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Une erreur inconnue est survenue.");
      }
    }
  };

  return (
    <>
      <div className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="login-content">
                <h2>Connexion</h2>
                <form className="newsletter-form" onSubmit={submitHandler}>
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <input
                    type="password"
                    className="input-newsletter"
                    placeholder="Mot de passe"
                    name="password"
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Connexion
                  </button>
                </form>
                <p>
                  Pendant la phase de test, les identifiants de connexion sont
                  admin@test.fr/123456 et redacteur@test.fr/123456 et
                  contributeur@test.fr/123456 (suivant le niveau de permission
                  que vous souhaitez tester)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
