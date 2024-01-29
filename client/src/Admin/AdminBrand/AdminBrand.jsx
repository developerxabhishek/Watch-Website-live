import { useState } from "react";
import "./AdminBrand.css";
import "../AdminTable/Admintable.css";
import { MdDelete } from "react-icons/md";
const img =
  "https://www.shutterstock.com/image-photo/old-pocket-watch-isolated-on-260nw-734909710.jpg";
const AdminBrand = () => {
  return (
    <>
      <div className="admin-brand-container">
        <h1>Create Brand</h1>
        <h2>Brand Name</h2>
        <input type="text" />
        <input type="file" name="" id="" />
        <button>Save Brand</button>

        <table>
          <thead>
            <tr>
              <th>S/n</th>
              <th>Brandname</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-column="S/n">1</td>
              <td data-column="Brandname">Titan</td>
              <td data-column="Image">
                <img src={img} alt="fasttrack" height="25px" width="25px" />
              </td>
              <td data-column="Delete">
                <MdDelete style={{ color: "red", fontSize: "3rem" }} />
              </td>
            </tr>
            <tr>
              <td data-column="S/n">2</td>
              <td data-column="Brandname">Fasttrack</td>
              <td data-column="Image">
                <img src={img} alt="fasttrack" height="25px" width="25px" />
              </td>
              <td data-column="Delete">
                <MdDelete style={{ color: "red", fontSize: "3rem" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminBrand;
