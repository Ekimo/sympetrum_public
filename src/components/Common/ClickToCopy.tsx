"use client";

import React from "react";
import { toast } from "react-toastify";

const ClickToCopy: React.FC<{ toCopy: string }> = ({ toCopy }) => {
  const handleCopyClick = async () => {
    toast.success("Lien copié dans le presse-papier");
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(toCopy);
    } else {
      return document.execCommand("copy", true, toCopy);
    }
  };

  return (
    <i
      onClick={handleCopyClick}
      className="fa fa-solid fa-copy table-action"
    ></i>
  );
};

export default ClickToCopy;
