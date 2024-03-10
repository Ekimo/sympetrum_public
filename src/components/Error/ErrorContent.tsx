"use client";

import React from "react";
import Link from "next/link";

const ErrorContent: React.FC = () => {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <h3>Erreur 404 : Page introuvable</h3>
            <p>
              La page que vous recherchez est introuvable, merci de nous
              contacter si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
            </p>

            <div className="back-btn">
              <Link href="/" className="btn btn-primary">
                Revenir à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorContent;
