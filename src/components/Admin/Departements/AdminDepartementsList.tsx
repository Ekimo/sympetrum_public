import React from "react";
import Link from "next/link";
import { DEPARTMENTS, DEPARTMENT_SLUGS } from "../../../../libs/utils/departments";

export default function AdminDepartementsList({
  sectionCounts,
}: {
  sectionCounts: Record<string, number>;
}) {
  const departments = DEPARTMENT_SLUGS.map((slug) => DEPARTMENTS[slug]);

  return (
    <div className="col-lg-8 col-md-12">
      <div className="content-details">
        <h3>Pages départements</h3>
        <p>Sélectionnez un département pour gérer ses sections.</p>
        <div className="row mt-20">
          {departments.map((dept) => (
            <div key={dept.slug} className="col-lg-6 col-md-6 mb-20">
              <div
                className="single-services-box"
                style={{ padding: "20px", border: "1px solid #eee", borderRadius: "6px" }}
              >
                <Link href={`/admin/departements/${dept.slug}`}>
                  <h4>{dept.pageTitle}</h4>
                  <p>{sectionCounts[dept.slug] ?? 0} section(s)</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
