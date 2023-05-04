import React from "react";
import "./style.scss";
import {
  FaUserAlt,
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/slices/UserSlice";
import { useToast } from "@chakra-ui/react";
const Navbar = () => {
   const toast = useToast();
  const userData = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch()
  const logOut =()=>{
    dispatch(logOutUser())
    localStorage.removeItem('loginDetails')
    toast({
      title: "You are logged out",
          status: "success",
          duration: 3000,
          isClosable: true,
    })
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <h3>Apna Dukan</h3>
            </div>
            <div className="nav-search">
              <input type="text" placeholder="Search your product....." />
              <FaSearch
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              ></FaSearch>
            </div>
            <div className="nav-menu">
              <Menu>
                <MenuButton style={{ background: "transparent" }} as={Button}>
                  <FaUserAlt
                    style={{
                      color: "#676C7B",
                      cursor: "pointer",
                      fontSize: "1.2rem",
                    }}
                  ></FaUserAlt>
                </MenuButton>
                {!userData.token ? (
                  <>
                    <MenuList>
                      <Link to={"/register"}>
                        <MenuItem>Register</MenuItem>
                      </Link>
                      <MenuDivider></MenuDivider>
                      <Link to={"/login"}>
                        <MenuItem>Login</MenuItem>
                      </Link>
                    </MenuList>
                  </>
                ) : (
                  <>
                    <MenuList>
                      <Link to={"/"}>
                        <MenuItem onClick={logOut}>LogOut</MenuItem>
                      </Link>
                      
                    </MenuList>
                  </>
                )}
              </Menu>
              <FaRegHeart
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              ></FaRegHeart>
              <FaShoppingCart
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              ></FaShoppingCart>
            </div>
          </div>
          <div className="nav-content-mob">
            <div className="nav-menu-mob">
              <DrawerMenu></DrawerMenu>
              <FaUserAlt
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              ></FaUserAlt>
              <FaRegHeart
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              ></FaRegHeart>
              <FaShoppingCart
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "2rem",
                }}
              ></FaShoppingCart>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
