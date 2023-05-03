import React from "react";
import './style.scss'
import {Link} from 'react-router-dom'
const SubNavbar = () => {
  return (
    <main>
      <div className="subnav-wrapper">
        <div className="subnav-container">
          <div className="subnav-content">
            <Link to={'/'}><button>Home</button></Link>
            <button>Mens</button>
            <button>Women's</button>
            <button>Kids</button>
            <button>Offer Zone</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubNavbar;
