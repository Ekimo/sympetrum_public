import Link from "next/link";
import { fetchAllCirculaires } from "../../../libs/data/admin/circulaires";

export default async function CirculaireTable() {
  const circulaires = await fetchAllCirculaires();

  return (
    <div className="pb-70">
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre de la circulaire</th>
                <th scope="col">Etat</th>
                <th scope="col" className="right-aligned">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {circulaires.map((d) => (
                <tr key={d.id}>
                  <th scope="row">{d.id}</th>
                  <td>{d.title}</td>
                  <td>Envoyée</td>
                  <td className="right-aligned">
                    <Link href={`/circulaires/${d.slug}`} target="_blank">
                      <i className="fa fa-solid fa-eye table-action"></i>
                    </Link>
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
