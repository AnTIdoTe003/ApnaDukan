import React, { useState } from "react";
import "../../styles/login.scss";
import login from "../../assets/login.jpg";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [auth, setAuth] = useAuth()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation()
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`/api/v1/auth/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.success) {
        toast({
          title: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAuth({...auth, user: data.existUser, token:data.token})
         navigate(location.state || '/')
         setLoginData({})
         localStorage.setItem('loginDetails', JSON.stringify(data))
      }
    } catch (error) {
      // console.log(error)
      toast({
          title: "User does not exist",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-content">
          <div className="login-img">
            <img src={login} alt="Login" />
          </div>
          <div className="login-input">
            <h3>
              Login To <span style={{ color: "#EE1C47" }}>Apna</span> Dukan
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Email</label>
                <input
                  placeholder="Enter your Email..."
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  type="email"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Password</label>
                <input
                  placeholder="Enter your Password..."
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  type="password"
                />
              </div>
              <div style={{display:'flex', alignItems:"center", gap:"2rem"}}>
              <button type="submit">Submit</button>
              <button style={{width:"7rem"}} type="submit" onClick={()=>{navigate('/forgot-password')}}>Forgot Password?</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
