import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarDashboard = () => {
  return (
    <div className="sidebar">
      <a href="/">
        <img src={logo} alt="logo" className="dashboard__logo" />
      </a>
      <ul className="dashboard-links">
        <li className="nav-item-dashboard">
          <NavLink to="/dashboard/main" className="dashboard_nav-links">
            Main
          </NavLink>
        </li>
        <li className="nav-item-dashboard ">
          <NavLink to="/dashboard/addcard" className="dashboard_nav-links">
            Add Card
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarDashboard;
