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
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const Navbar = () => {
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
                <MenuButton style={{background:"transparent"}} as={Button}>
              <FaUserAlt
                style={{
                  color: "#676C7B",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              ></FaUserAlt>
                </MenuButton>
                <MenuList>
                <Link to={'/register'}><MenuItem>Register</MenuItem></Link>
                  <MenuDivider></MenuDivider>
                <Link to={'/login'}><MenuItem>Login</MenuItem></Link>
                  
                </MenuList>
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
