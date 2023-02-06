import React from "react";
import NavbarDashboard from "./NavbarDashboard";
import "./Dashboard.css";
import ResponsiveAppBar from "./Appbar";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-right">
          <NavbarDashboard />
        </div>
        <div className="dashboard-left">
          <ResponsiveAppBar />
          <div className="dashboard__children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
