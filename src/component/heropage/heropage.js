import React from "react";
import "./heropage.css";

const Heropage = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-text">
          <h2>Throw paperwork into the trash where it belong</h2>
          <p>
            Eliminate all the hassle involved in managing people operations by
            automating it.
          </p>
        </div>
        <div className="hero-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/image 1.jpg`}
            alt="avatar"
          />
        </div>
      </div>
    </section>
  );
};

export default Heropage;
