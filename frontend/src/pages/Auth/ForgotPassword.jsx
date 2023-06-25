import React, { useState } from "react";
import forgot from "../../assets/forgot.gif";
import { Input } from "@chakra-ui/react";
import "../../styles/forgot-password.scss";
import { Button } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const ForgotPassword = () => {
  const toast = useToast()
  const [forgotData, setForgotData] = useState({
    email: "",
    answer: "",
    newPassword: "",
  });

  const navigate = useNavigate();

const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/auth/forgot-password`, forgotData, {
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
        navigate("/login");
        setForgotData({});
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
}
  return (
    <div className="forgot-wrapper">
      <div className="forgot-container">
        <div className="forgot-content">
          <div className="forgot-right">
            <img src={forgot} alt="" />
          </div>
          <div className="forgot-left">
            <div className="forgot-input">
              <label htmlFor="">Enter your Email</label>
              <Input
                value={forgotData.email}
                w={"300px"}
                type="text"
                name=""
                id=""
                onChange={(e) =>
                  setForgotData({ ...forgotData, email: e.target.value })
                }
              />
            </div>
            <div className="forgot-input">
              <label htmlFor="">Enter your answer to your question</label>
              <Input
                value={forgotData.answer}
                w={"300px"}
                type="text"
                name=""
                id=""
                placeholder="Enter the name of your pet"
                onChange={(e) =>
                  setForgotData({ ...forgotData, answer: e.target.value })
                }
              />
            </div>
            <div className="forgot-input">
              <label htmlFor="">Enter your new Password</label>
              <Input
                value={forgotData.newPassword}
                w={"300px"}
                type="password"
                name=""
                id=""
                onChange={(e) =>
                  setForgotData({ ...forgotData, newPassword: e.target.value })
                }
              />
            </div>
            <div className="forgot-input">
              <Button
                w={"7rem"}
                h={"3rem"}
                alignSelf={"center"}
                colorScheme="red"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
