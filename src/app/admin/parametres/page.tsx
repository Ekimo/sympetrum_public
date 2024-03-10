import React, { Suspense } from "react";

import AdminParametres from "@/components/Admin/AdminParametres";

import { FactType } from "../../../../libs/utils/definitions";
import { fetchFacts } from "../../../../libs/data/public/common";
import { getSession } from "../../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role === 0) {
    redirect("/admin");
  }
  const facts = await fetchFacts();
  return (
    <>
      <Suspense fallback={"Chargement des données"}>
        <AdminParametres facts={facts as FactType} />
      </Suspense>
    </>
  );
}
