import { redirect } from "next/navigation";
import { getSession } from "../../../../libs/utils/auth";
import { fetchNewsletterEmail } from "../../../../libs/data/public/common";
import AdminNewsletter from "@/components/Admin/Newsletter/AdminNewsletter";

export const dynamic = "force-dynamic";

export default async function Page() {
  const session = await getSession();
  if (session.userData.role !== 0) redirect("/admin");

  const emails = await fetchNewsletterEmail();

  return <AdminNewsletter emails={emails} />;
}
