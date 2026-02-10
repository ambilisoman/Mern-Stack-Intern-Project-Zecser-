import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        />
        <h3>Mikey Riz</h3>
        <p>UI/UX Designer</p>
        <p>Kochi, Ernakulam</p>
      </div>

      <div className="menu">
        <p>Preferences</p>
        <p>Applied Jobs</p>
        <p>Skill Assessment</p>
      </div>
    </div>
  );
};

export default Sidebar;
