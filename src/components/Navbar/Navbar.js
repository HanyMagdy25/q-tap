import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGlobe2 } from "react-icons/bs";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";

const Navbar = ({ loadingLogo }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbarr">
        <div className="navbar-container container">
          {loadingLogo ? (
            <Spinner />
          ) : (
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" />
            </Link>
          )}

          <div className="menu-icon" onClick={handleClick}>
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <div className="d-flex align-items-center navbar__lang">
              <BsGlobe2 />
              <select
                onChange={(e) => {
                  handleClick();
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
            <Link to="/register">
              <button className="btn btn-custom">Login</button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
