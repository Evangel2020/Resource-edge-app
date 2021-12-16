import React from "react";
import "./sectiontwo.css";

const Sectiontwo = () => {
  return (
    <section className="container3">
      <div className="logistics-card">
        <div className="logic-text">
          <h3>Admin &amp; logistics</h3>
          <p>
            Manage and track company assets as well as logistics for travelling
            employees
          </p>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="card-image">
              <img src={`images/image 4.jpg`} alt="avatar" />
            </div>
            <div className="card-text3">
              <h3>Travel &amp; logistics</h3>
              <p>
                Make travel requests, get approvals, and have access to travel
                information.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="card-image">
              <img src={`images/image 11.jpg`} alt="avatar" />
            </div>
            <div className="card-tracker">
              <h3>Asset management</h3>
              <p>
                Manage the acquisition, assignment, and disposition of assets
                seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ************Dashboard design*********** */}

      <div className="container_board">
        <div className="dashboard">
          <img src="images/image 43.svg" />
        </div>
      </div>

      {/* **************Logic card2************ */}
      <div className="logistics-card">
        <div className="logic-text">
          <h3>Finance</h3>
          <p>
            Generate invoices, track expenditure, and manage complex payrolls
            for multiple teams and companies
          </p>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="card-image">
              <img src={`images/image 5.jpg`} alt="avatar" />
            </div>
            <div className="card-text">
              <h3>RE Vouchers</h3>
              <p>
                Track and manage expenditure for multiple teams across your
                organisation using Resource Edge Vouchers
              </p>
            </div>
          </div>
          <div className="content">
            <div className="card-image">
              <img src={`images/image 8.jpg`} alt="avatar" />
            </div>
            <div className="card-tracker">
              <h3>Payroll</h3>
              <p>
                Our easy to use systems takes away the pain of managing complex
                payrolls for organisations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ***********Dashboard design2********* */}
      <div className="container_board">
        <div>
          <img src="images/image 42.svg" />
        </div>
      </div>

      {/* **********logo section****** */}
      <div className="logo-section">
        <div className="first-logo">
          <div>
            <img src={`images/image 7.jpg`} alt="avatar" />
          </div>
          <div>
            <img src={`images/image 6.jpg`} alt="avatar" />
          </div>
        </div>
        <div className="first-logo">
          <div>
            <img src={`images/image 9.jpg`} alt="avatar" />
          </div>
          <div>
            <img src={`images/image 10.jpg`} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
