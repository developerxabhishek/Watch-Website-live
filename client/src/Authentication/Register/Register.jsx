import React, { useState } from "react";
import "../Authentication.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({});
  const myNavigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const saveChange = () => {
    axios
      .post("http://localhost:8000/api/user/create", input)
      .then((data) => {
        setInput("");
        console.log(input);
        myNavigate("/OtpVerification");
      })
      .catch((res) => {
        let rest = res.data;
        console.log(res);
        alert(rest);
      });
    // navigate("/login ");
  };

  return (
    <>
      <center>
        <section>
          <div className="signin">
            <div className="content">
              <h2>Register</h2>

              <div className="form">
                <div className="inputBox">
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Name</i>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    name="mobile"
                    value={input.mobile}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Mobile</i>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Email</i>
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Password</i>
                </div>

                <div className="links"></div>

                <div className="inputBox">
                  <input
                    type="submit"
                    value="Create My Account"
                    onClick={() => {
                      saveChange();
                    }}
                  />{" "}
                  <Link to="/Login">
                    <li style={{ color: "white", marginTop: "20px" }}>
                      Already Registered ? Login
                    </li>
                  </Link>
                  <h2 id="userregistered"></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Register;
