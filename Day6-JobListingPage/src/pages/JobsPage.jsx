import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import JobList from "../components/JobList";
import "../styles/JobsPage.css";

const JobsPage = () => {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <div className="header">
            <h2>Top job picks for you</h2>
          </div>
          <div className="smallheader">
            <p>Based on your profile, preferences and recent activity</p>
            <button className="page-btn">Page 1 of 1</button>
          </div>

          <JobList />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
