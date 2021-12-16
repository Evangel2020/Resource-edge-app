import React from "react";
import "./sectionone.css";

function Sectionone() {
  const cards = [
    {
      id: 1,
      img: `images/image 2.jpg`,
      head: "Employee management",
      p: "  From Hiring &amp; Onboarding to Retiring, the Resource Edge Employee Management module eliminates all the  complexities &amp; paperwork involved in managing your team.",
    },
    {
      id: 2,
      img: `images/image 25.jpg`,
      head: "Performance management",
      p: "  Manage and track employee performance with our easy-to-use toolsfor goal setting, performance agreements and performance reviews.",
    },
    {
      id: 3,
      img: `images/image 3.jpg`,
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
                  <img src={item.img} alt={`avatar${item.id}`} />
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
          <div>
            <img src="images/image 40.svg" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
