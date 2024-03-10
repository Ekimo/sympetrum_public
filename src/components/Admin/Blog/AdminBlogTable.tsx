import Link from "next/link";
import DeleteButton from "../../UI/DeleteButton";
import { getSession } from "../../../../libs/utils/auth";
import { fetchFilteredArticle } from "../../../../libs/data/admin/blog";
import { softDeleteArticle } from "../../../../libs/data/admin/blog";

export default async function AdminBlogTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const session = await getSession();
  const articles = await fetchFilteredArticle(query, currentPage);

  return (
    <div className="pb-70">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titre</th>
              <th scope="col">Etat</th>
              <th scope="col" className="right-aligned">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((d) => (
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <td>{d.title}</td>
                <td>
                  {d.waiting_for_approbation ? (
                    <i className="fa fa-solid fa-hourglass table-action"></i>
                  ) : (
                    <i className="fa fa-solid fa-check table-action"></i>
                  )}
                </td>
                <td className="right-aligned">
                  <>
                    {(session.userData.role !== 2 ||
                      d.authorId === session.userData.id) && (
                      <Link href={`edit/${d.id}`}>
                        <i className="fa fa-solid fa-pencil table-action"></i>
                      </Link>
                    )}

                    <Link href={`/blog/${d.slug}`} target="_blank">
                      <i className="fa fa-solid fa-eye table-action"></i>
                    </Link>
                    {session.userData.role === 0 && (
                      <DeleteButton callback={softDeleteArticle} id={d.id} />
                    )}
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
