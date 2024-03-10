"use client";

import React from "react";
import "../../../public/styles/admin.css";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";

const DeleteButton: React.FC<{ callback: Function; id: number }> = ({
  callback,
  id,
}) => {
  const confirmDeletion = async () => {
    try {
      await callback(id);
      toast.success("Données supprimées avec succès");
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const showConfirmModal = () => {
    confirmAlert({
      title: "Attention",
      message: "Etes-vous sûr de vouloir effectuer cette action ?",
      buttons: [
        {
          label: "Supprimer",
          onClick: () => confirmDeletion(),
        },
        {
          label: "Annuler",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <i
      onClick={showConfirmModal}
      className="fa fa-solid fa-trash-can table-action"
    ></i>
  );
};

export default DeleteButton;
