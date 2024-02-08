import { useState } from "react";
import "./AdminAddProduct.css";

import Adminimageupload from "./Adminimageupload/Adminimageupload";

const AdminAddProduct = () => {
  const [image, setimage] = useState("");
  console.log(image);
  const submitImage=()=>{
    const data=new FormData()
    data.append("file",image)
    data.append("upload_preset","watchWebsite")
    data.append("cloud_name","drjkrbiu3")
    
  }
  return (
    <>
        <div className="admin-add-product">
          <div className="admin-add-product-container">
            <div className="admin-add-product-part1">
              <h1>Add Product</h1>
              <div>
                <label htmlFor="Product-name-admin">Product Name </label>
                <br />
                <input type="text" id="Product-name-admin" />
              </div>

              <div className="brand-gender-admin">
                <div>
                  <label htmlFor="brand-admin">Brand</label>
                  <br />
                  <select name="brand" id="brand-admin">
                    <option value="Titan">Fasttrack</option>
                    <option value="Titan">Titan</option>
                    <option value="Titan">Sonata</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gender-admin">Gender</label>
                  <br />
                  <select name="gender-admin" id="gender-admin">
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>
              </div>

              <div className="admin-product-price">
                <div>
                  <label htmlFor="admin-price">Price</label>
                  <br />
                  <input type="text" id="admin-price" />
                </div>
                <div>
                  <label htmlFor="admin-discount">Discount</label>
                  <br />
                  <input type="text" id="admin-discount" />
                </div>
              </div>

              <div className="admin-product-color-available">
                <div>
                  <label htmlFor="admin-color">Color</label>
                  <br />
                  <input type="text" id="admin-color" />
                </div>
                <div>
                  <label htmlFor="admin-available">Available</label>
                  <br />
                  <input type="text" id="admin-available" />
                </div>
              </div>

              <div className="admin-warranty-country">
                <div>
                  <label htmlFor="admin-product-warranty">Warranty</label>
                  <br />
                  <input type="text" id="admin-product-warranty" />
                </div>
                <div>
                  <label htmlFor="admin-country-origin">Origin</label>
                  <br />
                  <input type="text" id="admin-country-origin" />
                </div>
              </div>

              <div className="admin-shipping">
                <div>
                  <label htmlFor="admin-shipping">Shipping Area</label>
                  <br />
                  <input type="text" id="admin-shipping" />
                </div>
                <div>
                  <label htmlFor="admin-shipping-fee">Shipping Fee</label>
                  <br />
                  <input type="text" id="admin-shipping-fee" />
                </div>
              </div>

              <div>
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" id="description" />
              </div>
            </div>

            <div className="admin-add-product-part2">
              <div className="admin-image-upload-add-product">
                {/* <Adminimageupload/> */}
                <input
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setimage(e.target.files[0]);
                  }}
                />
                <button onClick={submitImage}>Upload Image</button>
              </div>
              <div>
                <button className="admin-image-upload-add-button" type="submit">
                  Upload Image
                </button>

                <button
                  className="admin-image-upload-add-button"
                  style={{ marginTop: "1rem" }}
                >
                  Add Product Now
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default AdminAddProduct;
