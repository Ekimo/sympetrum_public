"use client";

import React from "react";
import Link from "next/link";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { fetchNewsletterEmail } from "../../../libs/data/public/common";
import { toast } from "react-toastify";

const csvConfig = mkConfig({ useKeysAsHeaders: true });

export default function AdminSidebar({ role }: { role: number }) {
  const handleCsvDownload = async () => {
    try {
      const emails = await fetchNewsletterEmail();
      const csv = generateCsv(csvConfig)(emails);
      download(csvConfig)(csv);
      toast.success("Données téléchargées");
    } catch (error) {
      toast.error("Une erreur est survenue.");
    }
  };
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Menu Admin</h3>

          <ul>
            <li>
              <Link href="/admin">Accueil</Link>
            </li>
            <li>
              <Link href="/admin/blog">Blog</Link>
            </li>
            {role !== 2 && (
              <li>
                <Link href="/admin/odonates">Libellules de Rhône-Alpes</Link>
              </li>
            )}
            {role !== 2 && (
              <li>
                <Link href="/admin/biblio">Bibliographie</Link>
              </li>
            )}
            {role == 0 && (
              <li>
                <Link href="/admin/circulaires">Circulaires</Link>
              </li>
            )}
            {role == 0 && (
              <li>
                <Link href="/admin/utilisateurs">Utilisateurs</Link>
              </li>
            )}
            <li>
              <Link href="/admin/mediatheque">Médiathèque</Link>
            </li>
            {role == 0 && (
              <>
                <li>
                  <Link href="/admin/parametres">Paramètres généraux</Link>
                </li>
                <li>
                  <button onClick={handleCsvDownload}>Data newsletter</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
