import { useState } from "react";
import AdminSidebar from "./Component/AdminSidebar/AdminSidebar";
import AdminHome from "./Component/AdminPages/AdminHome";
import AdminHeader from "./Component/AdminHeader/AdminHeader";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";
import "./Admin.css";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
<>
<div className="grid-container">
      <AdminHeader OpenSidebar={OpenSidebar} />
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AdminHome />
      {/* <AdminAddProduct/> */}
      {/* <Outlet /> */}
    </div>
    

</>

  );
}

export default AdminLayout;
