"use client";

import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import { addUserToNewsletterList } from "../../../libs/action";

const Newsletter: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await addUserToNewsletterList(formData);
      toast.success("Merci pour votre inscription !");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? "Cette adresse email est déjà enregistrée."
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    }
  };
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-inner-area"
            style={{
              backgroundImage: `url(/images/newsletter-bg.jpg)`,
            }}
          >
            <div className="newsletter-content">
              <span
                className="sub-title"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Toutes nos infos, régulièrement
              </span>

              <h2
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Restez informés avec notre newsletter
              </h2>

              <form
                className="newsletter-form"
                onSubmit={handleSubmit}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrez votre email"
                  name="email"
                  required
                />
                <button type="submit">S&apos;inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
