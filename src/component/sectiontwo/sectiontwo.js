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
        <div className="content">
          <div className="card-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/image 4.jpg`}
              alt="avatar"
            />
          </div>
          <div className="card-text">
            <h3>Travel &amp; logistics</h3>
            <p>
              Make travel requests, get approvals, and have access to travel
              information.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="card-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/image 11.jpg`}
              alt="avatar"
            />
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

      {/* ************Dashboard design*********** */}

      <div className="container_board">
        <nav className="navigation-bar">
          <ul className="navlist-right">
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 19.jpg`}
                alt="logo"
              />
            </li>
          </ul>
          <ul className="navlist-left">
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 22.jpg`}
                alt="logo"
              />
            </li>
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 24.jpg`}
                alt="logo"
              />
            </li>
          </ul>
        </nav>

        <div className="button-container">
          <div className="image-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/image 26.jpg`}
              alt="logo"
            />
          </div>
          <div className="txt-button">
            <h4>Travel Request</h4>
          </div>
        </div>

        {/**********travel dashboard******** */}
        <div className="travel-dashboard">
          <div className="txt-board">
            <div className="card-table">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 15.jpg`}
                alt="button icon"
              />
              <span>Sizwe Bansi</span>
              <div className="btn-btn">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 29.jpg`}
                  alt="button icon"
                />
              </div>
              <div className="btn-btn2">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 35.jpg`}
                  alt="button icon"
                />
              </div>
            </div>
          </div>

          <div className="table-dashboard">
            <nav className="nav-head">
              <h4>Travel details</h4>
            </nav>
            <div className="travel-details view1">
              <div className="details-card">
                <h4>Departure Date</h4>
                <p>September 25, 2021</p>
                <h4>Travel type</h4>
                <p>Business</p>
              </div>
              <div className="details-card">
                <h4>Return Date</h4>
                <p>October 7, 2021</p>
                <h4>Destination</h4>
                <p>Lagos, Nigeria.</p>
              </div>
            </div>

            <div className="travel-details view2">
              <div className="details-card first">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 32.jpg`}
                  alt="button icon"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 33.jpg`}
                  alt="button icon"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 34.jpg`}
                  alt="button icon"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 35.jpg`}
                  alt="button icon"
                />
              </div>
              <div className="details-card second">
                <div className="vector-image">
                  <div className="vector1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/image 36.jpg`}
                      alt="button icon"
                    />
                  </div>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/image 32.jpg`}
                      alt="button icon"
                    />
                  </div>
                </div>
                <div className="vector-image">
                  <div className="vector1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/image 37.jpg`}
                      alt="button icon"
                    />
                  </div>
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/image 32.jpg`}
                      alt="button icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="content">
          <div className="card-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/image 5.jpg`}
              alt="avatar"
            />
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
            <img
              src={`${process.env.PUBLIC_URL}/images/image 8.jpg`}
              alt="avatar"
            />
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

      {/* ***********Dashboard design2********* */}
      <div className="payroll-dashboard">
        <nav className="navigation-bar">
          <ul className="navlist-right">
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 19.jpg`}
                alt="logo"
              />
            </li>
          </ul>
          <ul className="navlist-left">
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 22.jpg`}
                alt="logo"
              />
            </li>
            <li className="list-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/image 24.jpg`}
                alt="logo"
              />
            </li>
          </ul>
        </nav>

        <div className="button-container">
          <div className="image-button">
            <img
              src={`${process.env.PUBLIC_URL}/images/image 26.jpg`}
              alt="logo"
            />
          </div>
          <div className="txt-button">
            <h4>January Payroll</h4>
          </div>
        </div>

        <div className="card-input">
          <nav>
            <div className="input">
              <h4>Employees</h4>
            </div>
          </nav>
          <div className="input-text">
            <div className="input">
              <div className="input-valuecheck">
                <input type="checkbox"></input>
              </div>
              <div className="input-valuetext">
                <h4>SN</h4>
              </div>
              <div className="input-valuename">
                <h4>Full Name</h4>
              </div>
              <div className="input-valueroll">
                <h4>Role</h4>
              </div>
              <div className="input-valueearning">
                <h4>Earning</h4>
              </div>
              <div className="input-valuestatus">
                <h4>Status</h4>
              </div>
            </div>
            <div className="input">
              <div className="input-valuecheck">
                <input type="checkbox"></input>
              </div>
              <div className="input-valuetext">
                <h4>GO1</h4>
              </div>
              <div className="input-valuename">
                <div className="img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 15.jpg`}
                    alt="button icon"
                  />
                </div>
                <span>Sizwe Bansi</span>
              </div>
              <div className="input-valueroll">
                <h4>CEO</h4>
              </div>
              <div className="input-valueearning">
                <h4>50,000</h4>
              </div>
              <div className="input-valuestatus">
                <h4>Sent</h4>
              </div>
            </div>
            <div className="input">
              <div className="input-valuecheck">
                <input type="checkbox"></input>
              </div>
              <div className="input-valuetext">
                <h4>GO2</h4>
              </div>
              <div className="input-valuename">
                <div className="img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 13.jpg`}
                    alt="button icon"
                  />
                </div>
                <span>Ebele Rewane</span>
              </div>
              <div className="input-valueroll">
                <h4>Director</h4>
              </div>
              <div className="input-valueearning">
                <h4>45,000</h4>
              </div>
              <div className="input-valuestatus">
                <h4>Pending</h4>
              </div>
            </div>
            <div className="input">
              <div className="input-valuecheck">
                <input type="checkbox"></input>
              </div>
              <div className="input-valuetext">
                <h4>GO3</h4>
              </div>
              <div className="input-valuename">
                <div className="img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 14.png`}
                    alt="button icon"
                  />
                </div>
                <span>Banigo Selema</span>
              </div>
              <div className="input-valueroll">
                <h4>Marketer</h4>
              </div>
              <div className="input-valueearning">
                <h4>40,000</h4>
              </div>
              <div className="input-valuestatus">
                <h4>Pending</h4>
              </div>
            </div>
            <div className="input">
              <div className="input-valuecheck">
                <input type="checkbox"></input>
              </div>
              <div className="input-valuetext">
                <h4>GO4</h4>
              </div>
              <div className="input-valuename">
                <div className="img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 18.png`}
                    alt="button icon"
                  />
                </div>
                <span>Agbongile Amba</span>
              </div>
              <div className="input-valueroll">
                <h4>Sales</h4>
              </div>
              <div className="input-valueearning">
                <h4>30,000</h4>
              </div>
              <div className="input-valuestatus">
                <h4>Sent</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* **********logo section****** */}
      <div className="logo-section">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image 7.jpg`}
            alt="avatar"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image 6.jpg`}
            alt="avatar"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image 9.jpg`}
            alt="avatar"
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/image 10.jpg`}
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
