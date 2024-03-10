import { fetchFilteredPublication } from "../../../libs/data/public/biblio";
import { removePublication } from "../../../libs/action";
import { getSession } from "../../../libs/utils/auth";
import CopiableRow from "./CopiableRow";

export default async function PublicationTable({
  query,
  currentPage,
  admin = false,
}: {
  query: string;
  currentPage: number;
  admin: boolean;
}) {
  const session = await getSession();
  const publication = await fetchFilteredPublication(query, currentPage);

  return (
    <div className="pb-70">
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Titre</th>
                <th scope="col">Auteur</th>
                <th scope="col">Année</th>
                <th scope="col">Revue</th>
                <th scope="col">Livre (citation)</th>
                <th scope="col">Volume</th>
                <th scope="col">Numéro</th>
                <th scope="col">Editeur</th>
                <th scope="col">Remarques</th>
                <th scope="col" className="right-aligned">
                  {admin ? "Action" : "Lien/DOI"}
                </th>
              </tr>
            </thead>
            <tbody>
              {publication.map((d) => (
                <CopiableRow
                  key={d.id}
                  d={d}
                  admin={admin}
                  role={session.userData.role}
                  removePublication={removePublication}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
