"use client";

import { toast } from "react-toastify";

interface FileUploaderProps {
  onFileSelect: (file: Blob | null) => void;
}

export default function FileUploader({ onFileSelect }: FileUploaderProps) {
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      const fileSizeInMB = file.size / 1024 / 1024; // Convertir en Mo
      const maxFileSize = file.type === "application/pdf" ? 5 : 1; // 5 Mo pour PDF, 1 Mo pour images

      if (file.type !== "application/pdf" && !file.type.startsWith("image/")) {
        toast.error("Type de fichier non pris en charge");
        return;
      }

      if (fileSizeInMB > maxFileSize) {
        toast.error(`Taille maximale du fichier : ${maxFileSize} Mo`);
        return;
      }
    }

    onFileSelect(file);
  };

  return (
    <div className="col-lg-12">
      Fichier
      <div className="form-group">
        <input
          type="file"
          name="file"
          placeholder="Auteur"
          className="form-control"
          required
          onChange={onFileChange}
        />
      </div>
    </div>
  );
}
