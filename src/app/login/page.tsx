import LoginForm from "@/components/Auth/LoginForm";
import { getSession } from "../../../libs/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getSession();
  session && redirect("/admin");
  return <LoginForm />;
}
