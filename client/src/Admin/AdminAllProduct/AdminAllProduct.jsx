import "../AdminTable/Admintable.css";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const AdminAllProduct = () => {
  return (
    <>
          <h1 style={{ fontSize: "3rem", padding: " 10px 5%" }}>All Products</h1>
      <table>
        <thead>
          <tr>
            <th>S/n</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="S/n">1</td>
            <td data-column="Name">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quis.</td>
            <td data-column="Brand">Titan</td>
            <td data-column="Price">100</td>
            <td data-column="Quantity">70</td>
            <td data-column="Value">7000</td>
            <td data-column="Action"><FaEye /> <FaEdit/> <MdDelete/></td>
            
          </tr>

          <tr>
            <td data-column="S/n">2</td>
            <td data-column="Name">Lorem amet consectetur adipisicing elit. Eius, quis.</td>
            <td data-column="Brand">Fasttrack</td>
            <td data-column="Price">500</td>
            <td data-column="Quantity">10</td>
            <td data-column="Value">5000</td>
            <td data-column="Action"><FaEye/> <FaEdit/> <MdDelete/></td>
          </tr>

          <tr>
            <td data-column="S/n">3</td>
            <td data-column="Name">Lorem  consectetur adipisicing elit. Eius, quis.</td>
            <td data-column="Brand">Sonata</td>
            <td data-column="Price">1000</td>
            <td data-column="Quantity">8</td>
            <td data-column="Value">8000</td>
            <td data-column="Action"><FaEye/> <FaEdit/> <MdDelete/></td>
          </tr>






          
        </tbody>
      </table>

























    </>
  )
}

export default AdminAllProduct
