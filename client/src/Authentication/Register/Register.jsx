import React from 'react'
import "../Authentication.css";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <>
<center>
        <section>
<div className="signin"> 

<div className="content"> 

<h2>Register</h2> 

<div className="form"> 

<div className="inputBox"> 

<input type="text" name="empno"  required/> <i>Name</i> 

</div> 

<div className="inputBox"> 

<input type="text" name="name" required/> <i>Mobile</i> 

</div> 

<div className="inputBox"> 

<input type="text" name="email" required/> <i>Email</i> 

</div> 

<div className="inputBox"> 

<input type="password" name="password"  required/> <i>Password</i> 

</div> 

<div className="links"> 


</div> 

<div className="inputBox"> 

<Link to="/OtpVerification" style={{color:"white"}}><input type="submit" value="Create My Account" /> </Link>
<Link to="/Login"><li style={{color:"white", marginTop:"20px"}}>Already Registered ? Login</li></Link>
{/* <h2 id="userregistered"></h2> */}

</div> 

</div> 

</div> 

</div> 

</section> 
</center>

</>
  )
}

export default Register
