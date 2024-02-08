import { Link } from 'react-router-dom'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
 import { IoMdClose } from "react-icons/io";

 import { IoMdAddCircleOutline } from "react-icons/io";
 import { MdReviews } from "react-icons/md";

function AdminSidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h1>Watch<span style={{color:"orange"}}>Store</span></h1>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar} style={{zIndex:"10000",overflow:'visible'}}><IoMdClose style={{fontSize:"5rem",color:"white"}} />
</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/AdminHome" style={{color:"white"}}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/AdminCustomers" style={{color:"white"}}>
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                 <Link to="/AdminAllProduct" style={{color:"white"}}>
                    <BsFillArchiveFill className='icon'/> ALL Products
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/AdminAddProduct" style={{color:"white"}}>
                    
                    <IoMdAddCircleOutline className='icon' />Add Products
                    
                 </Link>
            </li>
            
            <li className='sidebar-list-item'>
                <Link to="/AdminAddBrand" style={{color:"white"}}>
                <IoMdAddCircleOutline className='icon' />Add Brand
              </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/AdminUserReviews" style={{color:"white"}}>
                <MdReviews className='icon' />
                     Reviews
                     </Link>
            </li>
           </ul>
    </aside>
  )
}

export default AdminSidebar
