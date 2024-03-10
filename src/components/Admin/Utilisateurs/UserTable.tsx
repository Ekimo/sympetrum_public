import Link from "next/link";
import DeleteButton from "../../UI/DeleteButton";
import { removeUser } from "../../../../libs/action";
import { getSession } from "../../../../libs/utils/auth";
import { fetchFilteredUser } from "../../../../libs/data/admin/users";

export default async function UserTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const session = await getSession();
  const odonates = await fetchFilteredUser(query, currentPage);

  return (
    <div className="pb-70">
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Rôle</th>
              <th scope="col" className="right-aligned">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {odonates.map((d) => (
              <tr key={d.id}>
                <th scope="row">{d.id}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  {d.role === 0
                    ? "admin"
                    : d.role === 1
                    ? "redacteur"
                    : "contributeur"}
                </td>

                <td className="right-aligned">
                  <Link href={`edit/${d.id}`}>
                    <i className="fa fa-solid fa-pencil table-action"></i>
                  </Link>
                  {session.userData.role === 0 && (
                    <DeleteButton callback={removeUser} id={d.id} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
