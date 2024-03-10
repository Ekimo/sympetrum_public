"use client";

import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const NotImplemented: React.FC<{ children: string }> = ({ children }) => {
  const notImplemented = () => {
    toast.info("En cours d'implémentation");
  };

  return (
    <Link href="#" onClick={notImplemented} scroll={false}>
      {children}
    </Link>
  );
};

export default NotImplemented;
