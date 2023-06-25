import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useAuth } from "../../context/auth";
const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/admin-auth", {
        headers: {
          Authorization: auth?.token,
        },
      });
      console.log(res.data.success);
      if (res.data.success) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth.token) {
      authCheck();
    }
  }, [auth.token]);
  return ok ? <Outlet /> : <Loader></Loader>;
};

export default AdminRoute;
