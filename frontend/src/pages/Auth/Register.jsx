import React, { useState } from "react";
import "../../styles/register.scss";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(`/api/v1/auth/register`, registerData,  {headers: {
    'Content-Type': 'application/json'
    }});
      if (data.success) {
        toast({
          title: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('/login')
        setRegisterData({});
      }
    } catch (error) {
      console.log(error)
       toast({
          title: 'Something went wrong',
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    }
  };
  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-content">
          <div className="register-heading">
            <h3>
              Welcome to <span>Apna</span> Dukan
            </h3>
          </div>
          <div className="register-input">
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Name</label>
                <input
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, name: e.target.value })
                  }
                  type="text"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Email</label>
                <input
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  type="email"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Address</label>
                <input
                  value={registerData.address}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      address: e.target.value,
                    })
                  }
                  type="text"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Contact Number</label>
                <input
                  value={registerData.phone}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, phone: e.target.value })
                  }
                  type="number"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Create your password</label>
                <input
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  type="password"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="">Confirm your password</label>
                <input
                  value={registerData.confirmPassword}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      confirmPassword: e.target.value,
                    })
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

export default Register;
