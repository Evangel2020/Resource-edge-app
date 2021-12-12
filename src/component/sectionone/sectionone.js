import React from "react";
import "./sectionone.css";

function Sectionone() {
  const cards = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/images/image 2.jpg`,
      head: "Employee management",
      p: "  From Hiring &amp; Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the  complexities &amp; paperwork involved in managing your team.",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/images/image 25.jpg`,
      head: "Performance management",
      p: "  Manage and track employee performance with our easy-to-use toolsfor goal setting, performance agreements and performance reviews.",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/images/image 3.jpg`,
      head: "Paid time off",
      p: "Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.",
    },
  ];

  return (
    <section className="container2">
      <div className="container-section">
        <div className="section-text">
          <h2>Human resources</h2>
          <p>
            Onboard new employee, manage the employee lifecycle and measure
            employee performance.
          </p>
        </div>
        <div className="container_card">
          {cards.map((item) => (
            <React.Fragment key={item.id}>
              <div className="box ">
                <div className="card-image">
                  <img src={item.img} alt="avatar" />
                </div>
                <div className="card-text">
                  <h3>{item.head}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
              <br />
            </React.Fragment>
          ))}
        </div>
        {/* ******Dashboard design******* */}

        <div className="container_dashboard">
          <nav className="navigation-bar">
            <ul className="navlist-right">
              <li className="list-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 27.jpg`}
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

          <div className="dashboard-content">
            <div className="button-container">
              <div className="image-button">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 26.jpg`}
                  alt="logo"
                />
              </div>
              <div className="txt-button">
                <h4>Employee</h4>
              </div>
              <div className="search-btn">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 28.jpg`}
                  alt="search icon"
                />
              </div>
              {/* ***********line button********* */}
              <div className="line-btn">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 29.jpg`}
                    alt="button icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 29.jpg`}
                    alt="button icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 29.jpg`}
                    alt="button icon"
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 29.jpg`}
                    alt="button icon"
                  />
                </div>
              </div>
            </div>

            {/* **********card container******** */}
            <div className="dashboard-card">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 15.jpg`}
                  alt="button icon"
                />
                <span>Sizwe Bansi</span>
                <div className="btn-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 30.jpg`}
                    alt="button icon"
                  />
                </div>
              </div>
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 13.jpg`}
                  alt="button icon"
                />
                <span>Ebele Rewane</span>
                <div className="btn-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 30.jpg`}
                    alt="button icon"
                  />
                </div>
              </div>
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 14.png`}
                  alt="button icon"
                />
                <span>Banigo Selema</span>
                <div className="btn-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 30.jpg`}
                    alt="button icon"
                  />
                </div>
              </div>
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/images/image 18.png`}
                  alt="button icon"
                />
                <span>Abongile Amba</span>
                <div className="btn-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/image 30.jpg`}
                    alt="button icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
