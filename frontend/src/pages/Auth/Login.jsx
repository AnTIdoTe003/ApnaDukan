import React, { useState } from "react";
import "../../styles/login.scss";
import login from "../../assets/login.jpg";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
         navigate('/')
         setLoginData({})
      }
    } catch (error) {
      console.log(error);
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
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
