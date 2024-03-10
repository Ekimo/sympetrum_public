"use client";

import React from "react";
import { toast } from "react-toastify";
import { Publication } from "../../../libs/utils/definitions";
import Link from "next/link";
import DeleteButton from "../UI/DeleteButton";

const CopiableRow: React.FC<{
  d: Publication;
  admin: boolean;
  removePublication: (id: number) => Promise<void>;
  role: Number;
}> = ({ d, admin, removePublication, role }) => {
  const handleCopyClick = async () => {
    if (!admin) {
      let phrase = "";
      if (d.author) phrase += d.author;
      if (d.year) {
        if (phrase !== "") phrase += ", ";
        phrase += d.year;
      }
      if (d.title) {
        if (phrase !== "") phrase += ", ";
        phrase += `"${d.title}"`;
      }
      if (d.journal) {
        if (phrase !== "") phrase += ", ";
        phrase += d.journal;
      }
      if (d.book_citation) {
        if (phrase !== "") phrase += ", ";
        phrase += d.book_citation;
      }
      if (d.volume) {
        if (phrase !== "") phrase += ", ";
        phrase += d.volume;
      }
      if (d.number) {
        if (phrase !== "") phrase += ", ";
        phrase += d.number;
      }

      toast.success("La référence a été copiée");
      if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(phrase);
      } else {
        return document.execCommand("copy", true, phrase);
      }
    }
  };

  return (
    <tr key={d.id} onClick={handleCopyClick}>
      <td className={d.title ? "" : "bg-no-data"}>{d.title}</td>
      <td className={d.author ? "" : "bg-no-data"}>{d.author}</td>
      <td className={d.year ? "" : "bg-no-data"}>{d.year}</td>
      <td className={d.journal ? "" : "bg-no-data"}>{d.journal}</td>
      <td className={d.book_citation ? "" : "bg-no-data"}>{d.book_citation}</td>
      <td className={d.volume ? "" : "bg-no-data"}>{d.volume}</td>
      <td className={d.number ? "" : "bg-no-data"}>{d.number}</td>
      <td className={d.editor ? "" : "bg-no-data"}>{d.editor}</td>
      <td className={d.additional_comments ? "" : "bg-no-data"}>
        {d.additional_comments}
      </td>
      <td className="right-aligned">
        {d.link ? (
          <Link href={d.link} target="_blank">
            <i className="fa fa-solid fa-link table-action"></i>
          </Link>
        ) : admin ? (
          ""
        ) : (
          "Aucun"
        )}
        {admin && (
          <>
            <Link href={`edit/${d.id}`}>
              <i className="fa fa-solid fa-pencil table-action"></i>
            </Link>

            {role === 0 && (
              <DeleteButton callback={removePublication} id={d.id} />
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default CopiableRow;
