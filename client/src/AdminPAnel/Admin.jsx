import { Route, Routes } from "react-router-dom"
import AdminLayout from "./AdminLayout"
import AdminHome from "./Component/AdminPages/AdminHome"
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct"

const Admin = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminLayout/>}>
        <Route index element={<AdminHome/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/AdminAddProduct" element={<AdminAddProduct/>}/>
    </Route>
    </Routes>
  )
}

export default Admin
