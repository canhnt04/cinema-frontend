import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Admin/Navbar/AdminNavbar";
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        {/* css: overflow:hidden -> overflow-y-auto */}
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
