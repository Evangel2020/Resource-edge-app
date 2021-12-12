import React from "react";
import Navbar from "../../component/navbar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div style={{ margin: "50px 0" }}>
          <h1>Hello, Ositadinma Nwangwu</h1>
          <p>Welcome and good to have u back</p>
        </div>
        <div>
          <h2>Things to do</h2>
          <div className="dashboardcolumn">
            <div className="col">
              <div>
                <div className="circle" />
                <p>Upload your employee performance</p>
              </div>
              <p
                style={{
                  marginTop: "11px",
                  marginRight: "29px",
                  color: "#0052cc",
                }}
              >
                Begin
              </p>
            </div>
            <div className="col">
              <div>
                <div className="circle" />
                <p>Start quarterly self review</p>
              </div>
              <button className="resume">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
