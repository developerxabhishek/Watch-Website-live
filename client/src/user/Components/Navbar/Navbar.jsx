import "./Navbar.css";
import { links } from "../../../Data/Data";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from 'usehooks-ts'
import NavbarPopup from "./NavbarPopup/NavbarPopup";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {


    const match = useMediaQuery('(max-width: 821px)')
    
    const [showSearch, setShowSearch] = useState(false)



    return <>
        <div className="header-container">

            <div className="nav-container" >


                <div className="heading-container">
                    <h1>Watch<span style={{color:"orange"}}>Store</span></h1>
                </div>

                <div className={match?"hide":"link-container"}>

                    {links.map((key) => {

                        return <li className="link"> <Link to={key} style={{color:"white"}}>{key}</Link>  </li>

                    })}

                </div>

                <div className={match?"hide":"sideicon-container"}>
                    <IoSearch className="icon" onClick={()=>{setShowSearch(!showSearch)}} />
                    <Link to="/Wishlist"  style={{color:"white"}}><FaRegHeart className="icon"/></Link>
                    <Link to="/Cart" style={{color:"white"}}><FiShoppingCart className="icon" /></Link>
                    <Link to="/ProfilePage" style={{color:"white"}} ><CgProfile className="icon" /></Link>
                  

                </div>
<div className={match?"popup-container-parent":"hide"}>

<IoSearch className="icon" onClick={()=>{setShowSearch(!showSearch)}} />
<NavbarPopup  />

</div>               
            </div>
{/* 
            <input type="text" className={!match?"search-area":"hide"} style={!showSearch ? {translate:'140vw'}:{translate:'77vw',width:'20vw',zIndex:"111"}} placeholder="Serach here..." />

            <input type="text" className={match?"search-area-mobile":"hide"} style={!showSearch ? {translate:'140vw'}:{translate:'5vw',width:'90%', top:'12%',zIndex:"111"}} placeholder="Serach here..." /> */}
        </div>



    </>
}



export default Navbar;