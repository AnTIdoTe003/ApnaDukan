import React, {useEffect, useState} from "react";
import { Spinner } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
const Loader = () => {
  const [count,setCount] = useState(5)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    const interval = setTimeout(()=>{
      setCount((prevValue)=> --prevValue)
    },1000);
    (count === 0) && navigate('/login', {state:location.pathname})
    return()=>clearInterval(interval)
  }, [count, navigate, location])
  return (
    <div className="spinner-wrapper">
      <div className="spinner-container">
        <div className="spinner-content">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#EE1C47"
            size="xl"
          />
          <p>
            Redirecting you to the Login Page in <b>{count} </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
