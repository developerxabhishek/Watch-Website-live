import { Link } from "react-router-dom";
import "./Wishlist.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
const img="https://zimsonwatches.com/cdn/shop/products/5000-0130-B52A_65e51ba9-ba1a-470b-a812-6362d7238b9c.jpg?v=1686547406&width=330";
const Wishlist = () => {
    return (
       <>
    
<div className="wishlist-container">
<h1 style={{fontSize:"2.5rem",margin:"0 0 5px 5%"}}>Wishlist</h1>
        <table>
  <thead>
    <tr>
      <th>Thumbnail</th>
      <th> Name</th>
      <th>Price</th>
      <th>Add to cart</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{background:"none"}} >
      <td data-column="Thumbnail"><img src={img} alt="wishlist" height="60px" width="60px"/></td>
      <td data-column="Name">Matman</td>
      <td data-column="Price">5000</td>
      <td data-column="Add to Cart"><FiShoppingCart style={{fontSize:"3rem"}} /></td>
      <td data-column="Remove"><CiCircleRemove style={{fontSize:"3rem"}}/></td>
    </tr>
    <tr style={{background:"none"}} >
      <td data-column="Thumbnail"><img src={img} alt="wishlist" height="60px" width="60px"/></td>
      <td data-column="Name">Matman</td>
      <td data-column="Price">5000</td>
      <td data-column="Add to Cart"><FiShoppingCart style={{fontSize:"3rem"}} /></td>
      <td data-column="Remove"><CiCircleRemove style={{fontSize:"3rem"}}/></td>
    </tr>
    <tr style={{background:"none"}} >
      <td data-column="Thumbnail"><img src={img} alt="wishlist" height="60px" width="60px"/></td>
      <td data-column="Name">Matman</td>
      <td data-column="Price">5000</td>
      <td data-column="Add to Cart"><FiShoppingCart style={{fontSize:"3rem"}} /></td>
      <td data-column="Remove"><CiCircleRemove style={{fontSize:"3rem"}}/></td>
    </tr>
  </tbody>
</table>


</div>


















       </>
    )
}
export default Wishlist;