import Link from "next/link";
import { fetchFilteredOdonate } from "../../../libs/data/public/odonates";
import DeleteButton from "../UI/DeleteButton";
import { removeOdonate } from "../../../libs/action";
import { getSession } from "../../../libs/utils/auth";

export default async function OdonateTable({
  query,
  currentPage,
  admin = false,
}: {
  query: string;
  currentPage: number;
  admin: boolean;
}) {
  const session = await getSession();
  const odonates = await fetchFilteredOdonate(query, currentPage);

  return (
    <div className="pb-70">
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nom scientifique</th>
                <th scope="col">Auteur et année de description</th>
                <th scope="col">Nom français</th>
                <th scope="col">Sous-ordre/infra-ordre</th>
                <th scope="col">Famille</th>
                <th scope="col" className="right-aligned">
                  {admin ? "Action" : "Lien lié"}
                </th>
              </tr>
            </thead>
            <tbody>
              {odonates.map((d) => (
                <tr key={d.id}>
                  <td className="italic">{d.scientific_name}</td>
                  <td>{d.author_and_year}</td>
                  <td>{d.french_name}</td>
                  <td>{d.suborder}</td>
                  <td>{d.family}</td>

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
                        {session.userData.role === 0 && (
                          <DeleteButton callback={removeOdonate} id={d.id} />
                        )}
                      </>
                    )}
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
