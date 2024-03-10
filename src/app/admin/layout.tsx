import PageBanner from "@/components/Common/PageBanner";
import Navbar from "@/components/Layouts/Navbar";
import Logout from "@/components/Auth/Logout";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import { getSession } from "../../../libs/utils/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Administration"
        BGImage="/images/page-banner4.jpg"
      />
      <Logout />
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <AdminSidebar role={session.userData.role} />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
