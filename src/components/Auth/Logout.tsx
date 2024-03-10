import { redirect } from "next/navigation";
import { logout } from "../../../libs/utils/auth";

export default async function Logout() {
  return (
    <section>
      <form
        className="right-aligned-logout"
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button className="btn btn-secondary " type="submit">
          Déconnexion
        </button>
      </form>
    </section>
  );
}
