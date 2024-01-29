import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <>
      <div className="admin-nav">
        <h1>
          Watch<span style={{ color: "orange" }}>Store</span>
        </h1>
        <h1 style={{ fontSize: "2.5rem" }}>Admin</h1>
        <input type="checkbox" name="" id="admin-checkbox" />
        <label htmlFor="admin-checkbox" className="admin-checkbox">
          <MdOutlineMenu />{" "}
        </label>
        <ul className="admin-list-nav">
          <li>
            <Link to="/AdminDashboard" style={{ color: "white" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/AdminAllProduct" style={{ color: "white" }}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/AdminAddProduct" style={{ color: "white" }}>
              Add Product
            </Link>
          </li>
          <li>
            <Link to="/AdminBrand" style={{ color: "white" }}>
              Brands
            </Link>
          </li>
          <li>
            <Link to="/AdminOrder" style={{ color: "white" }}>
              Order
            </Link>{" "}
          </li>
          <li>
            <Link to="/AdminProfile" style={{ color: "white" }}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/Logout" style={{ color: "white" }}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;
