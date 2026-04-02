"use client";

import React from "react";
import Link from "next/link";

export default function AdminSidebar({ role }: { role: number }) {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_categories">
          <h3 className="widget-title">Menu Admin</h3>

          <ul>
            <li>
              <Link href="/admin">Accueil</Link>
            </li>
            <li>
              <Link href="/admin/blog">Blog</Link>
            </li>
            {role == 0 && (
              <li>
                <Link href="/admin/departements">Pages départements</Link>
              </li>
            )}
            {role == 0 && (
              <li>
                <Link href="/admin/odorunalpes">Page Odorunalpes</Link>
              </li>
            )}
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
                  <Link href="/admin/newsletter">Newsletter</Link>
                </li>
                <li>
                  <Link href="/admin/parametres">Page d&apos;accueil</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
