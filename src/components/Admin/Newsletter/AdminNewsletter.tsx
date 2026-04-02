"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import {
  addNewsletterEmails,
  removeNewsletterEmail,
} from "../../../../libs/action";

const csvConfig = mkConfig({ useKeysAsHeaders: true });

export default function AdminNewsletter({
  emails: initialEmails,
}: {
  emails: { id: number; email: string }[];
}) {
  const [emails, setEmails] = useState(initialEmails);
  const [manualInput, setManualInput] = useState("");
  const [importResult, setImportResult] = useState<{
    added: number;
    duplicates: number;
    invalid: number;
    errors: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // ---- EXPORT CSV ----
  const handleExport = () => {
    if (emails.length === 0) {
      toast.error("Aucune adresse à exporter");
      return;
    }
    const data = emails.map((e) => ({ email: e.email }));
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
    toast.success(`${emails.length} adresse(s) exportée(s)`);
  };

  // ---- AJOUT MANUEL ----
  const handleManualAdd = async () => {
    const lines = manualInput
      .split(/[\n,;]+/)
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      toast.error("Aucune adresse saisie");
      return;
    }

    setIsLoading(true);
    setImportResult(null);
    try {
      const result = await addNewsletterEmails(lines);
      setImportResult(result);
      setManualInput("");
      if (result.added > 0) {
        toast.success(`${result.added} adresse(s) ajoutée(s)`);
        router.refresh();
        setEmails((prev) => [...prev]); // force re-render after refresh
      }
      if (result.duplicates > 0) {
        toast.info(`${result.duplicates} doublon(s) ignoré(s)`);
      }
      if (result.invalid > 0) {
        toast.error(`${result.invalid} adresse(s) invalide(s)`);
      }
    } catch {
      toast.error("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  // ---- IMPORT HELLOASSO ----
  const handleFileImport = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setImportResult(null);

    try {
      const text = await file.text();
      const lines = text.split("\n");

      if (lines.length < 2) {
        toast.error("Le fichier semble vide");
        setIsLoading(false);
        return;
      }

      // Trouver la colonne Email (colonne 16 dans le format HelloAsso, index 15)
      const header = lines[0].split(";");
      let emailIndex = header.findIndex(
        (h) => h.trim().toLowerCase() === "email"
      );

      // Fallback : chercher "email payeur"
      if (emailIndex === -1) {
        emailIndex = header.findIndex((h) =>
          h.trim().toLowerCase().includes("email")
        );
      }

      if (emailIndex === -1) {
        toast.error(
          'Colonne "Email" introuvable dans le fichier. Vérifiez que le fichier provient bien de HelloAsso.'
        );
        setIsLoading(false);
        return;
      }

      const extractedEmails: string[] = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(";");
        const email = cols[emailIndex]?.trim();
        if (email) {
          extractedEmails.push(email);
        }
      }

      if (extractedEmails.length === 0) {
        toast.error("Aucune adresse email trouvée dans le fichier");
        setIsLoading(false);
        return;
      }

      const result = await addNewsletterEmails(extractedEmails);
      setImportResult(result);
      if (result.added > 0) {
        toast.success(`${result.added} adresse(s) importée(s) depuis le fichier`);
        router.refresh();
      }
      if (result.duplicates > 0) {
        toast.info(`${result.duplicates} doublon(s) ignoré(s)`);
      }
      if (result.invalid > 0) {
        toast.error(`${result.invalid} adresse(s) invalide(s)`);
      }
    } catch {
      toast.error("Erreur lors de la lecture du fichier");
    } finally {
      setIsLoading(false);
      event.target.value = "";
    }
  };

  // ---- SUPPRESSION ----
  const handleDelete = (id: number, email: string) => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: `Supprimer ${email} de la liste ?`,
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            try {
              await removeNewsletterEmail(id);
              setEmails((prev) => prev.filter((e) => e.id !== id));
              toast.success("Adresse supprimée");
            } catch {
              toast.error("Erreur lors de la suppression");
            }
          },
        },
        { label: "Non", onClick: () => {} },
      ],
    });
  };

  return (
    <div className="col-lg-8 col-md-12">
      <div className="content-details">
        <h3>Newsletter — {emails.length} abonné(s)</h3>

        {/* ---- EXPORT ---- */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "6px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <h4>Exporter la liste</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Télécharge un fichier CSV contenant toutes les adresses email de la
            liste newsletter.
          </p>
          <button onClick={handleExport} className="btn btn-primary">
            Télécharger le CSV ({emails.length} adresses)
          </button>
        </div>

        {/* ---- IMPORT HELLOASSO ---- */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <h4>Importer depuis HelloAsso</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Sélectionnez le fichier CSV exporté depuis HelloAsso (menu Adhésions
            &gt; Exporter). Les adresses email seront extraites
            automatiquement. Les doublons sont ignorés.
          </p>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileImport}
            disabled={isLoading}
            className="form-control"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* ---- AJOUT MANUEL ---- */}
        <div
          style={{
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        >
          <h4>Ajouter manuellement</h4>
          <p style={{ color: "#666", fontSize: "14px" }}>
            Saisissez une ou plusieurs adresses email, une par ligne. Les
            doublons sont ignorés automatiquement.
          </p>
          <textarea
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            placeholder={"exemple@email.com\nautreexemple@email.com"}
            className="form-control"
            rows={4}
            style={{ marginBottom: "10px" }}
          />
          <button
            onClick={handleManualAdd}
            disabled={isLoading}
            className="btn btn-primary"
          >
            {isLoading ? "Ajout en cours..." : "Ajouter"}
          </button>
        </div>

        {/* ---- RESULTAT IMPORT ---- */}
        {importResult && (
          <div
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "20px",
              background: "#f9f9f9",
            }}
          >
            <strong>Résultat :</strong>
            <ul style={{ marginTop: "5px", marginBottom: "0" }}>
              {importResult.added > 0 && (
                <li style={{ color: "#198754" }}>
                  {importResult.added} adresse(s) ajoutée(s)
                </li>
              )}
              {importResult.duplicates > 0 && (
                <li style={{ color: "#0d6efd" }}>
                  {importResult.duplicates} doublon(s) déjà présent(s), ignoré(s)
                </li>
              )}
              {importResult.invalid > 0 && (
                <li style={{ color: "#dc3545" }}>
                  {importResult.invalid} adresse(s) invalide(s)
                </li>
              )}
              {importResult.errors.map((err, i) => (
                <li key={i} style={{ color: "#dc3545", fontSize: "13px" }}>
                  {err}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ---- LISTE ---- */}
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th style={{ textAlign: "right" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((e, i) => (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td>{e.email}</td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      onClick={() => handleDelete(e.id, e.email)}
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i className="fa-solid fa-trash-can table-action"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
