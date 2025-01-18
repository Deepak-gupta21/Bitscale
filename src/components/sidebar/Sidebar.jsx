import React from "react";
import { FaHome, FaFileAlt, FaCog } from "react-icons/fa"; // Import icons from react-icons
import "./Sidebar.css";

import { GoBriefcase } from "react-icons/go";
import { GoStack } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="icon" title="Home">
          <FaHome />
        </div>
        <div className="icon" title="Documents">
          <FaFileAlt />
        </div>
        <div className="icon" title="Settings">
          <FaCog />
        </div>
      </div>

      <div className="down">
        <div className="icon" title="Briefcase">
          <GoBriefcase />
        </div>
        <div className="icon" title="Stack" style={{ color: "red" }}>
          <GoStack />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
