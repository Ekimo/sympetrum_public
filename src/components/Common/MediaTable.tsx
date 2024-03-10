import Link from "next/link";
import { fetchFilteredMedia } from "../../../libs/data/admin/media";
import ClickToCopy from "./ClickToCopy";

export default async function MediaTable({
  query,
  currentPage,
  admin = false,
}: {
  query: string;
  currentPage: number;
  admin: boolean;
}) {
  const medias = await fetchFilteredMedia(query, currentPage);

  return (
    <div className="pb-70">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Type</th>
              {admin && (
                <th scope="col" className="right-aligned">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {medias.map((d) => (
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <td>{d.title}</td>
                <td>{d.type}</td>
                {admin && (
                  <th scope="col" className="right-aligned">
                    <ClickToCopy toCopy={d.url} />

                    <Link href={d.url} target="_blank">
                      <i className="fa fa-solid fa-eye table-action"></i>
                    </Link>
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
