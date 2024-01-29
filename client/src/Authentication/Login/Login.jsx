import "../Authentication.css";
import { Link, useNavigate } from "react-router-dom";
const myimg="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww"




const Login = () => {
  return (
    <>
<center>
<section> 

<div className="signin"> 

<div className="content"> 

<h2>Sign In</h2> 

<div className="form"> 

<div className="inputBox"> 

<input type="text"   required/> <i>Username</i> 

</div> 

<div className="inputBox"> 

<input type="password"   required/> <i>Password</i> 

</div> 


<div className="inputBox"> 

<input type="submit" value="Login" /> 

</div> 
<ul id="loginlist">
    <li>Forget Password</li>
    <Link to="/Register"><li>Dont have an Account ? Create one</li></Link>
</ul>

</div> 

</div> 

</div> 

</section> 
</center>

</>
  )
}

export default Login

