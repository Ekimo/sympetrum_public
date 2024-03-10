"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import FileUploader from "@/components/Common/FileUploader";
import axios, { AxiosRequestConfig } from "axios";
import { createMedia } from "../../../../libs/action";

export default function AdminCreateMedia() {
  const [selectedFile, setSelectedFile] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (file: Blob | null) => {
    setSelectedFile(file);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      toast.info("Aucun fichier sélectionné");
      return;
    }

    setIsUploading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("file", selectedFile);

    try {
      const options: AxiosRequestConfig = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axios.post<{
        fileUrl: string;
        fileType: string;
      }>("/api/upload", formData, options);

      const fileUrl = response.data.fileUrl;
      const fileType = response.data.fileType;

      await createMedia(formData, fileUrl, fileType);
      toast.success("Le fichier a été ajouté");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="contact-form">
            <form onSubmit={submitHandler}>
              <div className="container">
                <div className="contact-form-box">
                  <div className="row">
                    <div className="col-lg-12">
                      Titre du fichier
                      <div className="form-group">
                        <input
                          type="text"
                          name="title"
                          placeholder="Titre du fichier"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <FileUploader onFileSelect={handleFileSelect} />

                    <div className="col-lg-12 col-sm-12">
                      <button
                        type="submit"
                        className={
                          isUploading
                            ? "btn btn-secondary disabled"
                            : "btn btn-primary"
                        }
                        disabled={isUploading}
                      >
                        {isUploading ? "Ajout en cours..." : "Ajouter"}
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
}
