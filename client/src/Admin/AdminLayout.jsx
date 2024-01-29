import { Outlet ,Link} from "react-router-dom";
import AdminNavbar from "./AdminNavbar/AdminNavbar";
import Footer from "../user/Components/Footer/Footer";
const AdminLayout = () => {
  return(
  <>
<AdminNavbar/>
<Outlet/>

  </>
  );
};

export default AdminLayout;