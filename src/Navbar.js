import React from "react";
import VideoCameraFrontRoundedIcon from "@mui/icons-material/VideoCameraFrontRounded";
import CardMembershipRoundedIcon from "@mui/icons-material/CardMembershipRounded";
import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <strong>HF</strong>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <VideoCameraFrontRoundedIcon />
            LIVE
          </div>
          <div className="menu-icon">
            <CardMembershipRoundedIcon />
            MEMBERSHIPS
          </div>
          <div className="menu-icon">
            <DirectionsRunRoundedIcon />
            PLANS
          </div>
          <div className="menu-icon">
            <DashboardCustomizeOutlinedIcon />
            MORE
          </div>
        </div>
        <div className="login">
          <PersonRoundedIcon />
          Login
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
