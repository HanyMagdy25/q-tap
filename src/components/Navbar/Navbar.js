import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGlobe2, BsCart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profile.png";

import { navTitle } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import Dropdown from "./Dropdown";

const Navbar = ({ loadingLogo, setLang, lang, tokenQTap }) => {
  const [click, setClick] = useState(false);
  const [dropNav, setDropNav] = useState(false);

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
                  {lang === "en" ? `${item.title}` : `${item.titleArabic}`}
                </NavLink>
              </li>
            ))}
            <div className="d-flex align-items-center navbar__lang">
              <BsGlobe2 />
              <select
                onChange={(e) => {
                  handleClick();
                  setLang(e.target.value);
                  localStorage.setItem("qTapLanguage",JSON.stringify(e.target.value))
                }}
              >
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
            {!tokenQTap ? (
              <Link to="/login">
                <button className="btn btn-custom">
                  {lang === "en" ? `Login` : `تسجيل دخول`}
                </button>
              </Link>
            ) : (
              <>
                <div className="mx-3 cart-div">
                  <Link to="/cart" className="flex-center">
                    <BsCart />
                  </Link>
                </div>
                <div
                  className="profile-navbar"
                  onClick={() => setDropNav(!dropNav)}
                >
                  <img src={profileImg} alt="profile-img" loading="lazy" />
                  <span className="flex-center">
                    <MdKeyboardArrowDown />
                  </span>
                  {dropNav && <Dropdown lang={lang} />}
                </div>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
