import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer-container">
        <div className="footer-right">
          <div className="footer-img1">
            <h3>resource edge</h3>
          </div>
          <div className="footer-txt">
            <p className="paragraph-text">Throw paper into trash</p>
          </div>
        </div>
        <div className="footer-left">
          <div className="footer-img2">
            <div className="svg-img">
              <img src="images/image 50.svg" />
            </div>
            <div className="svg-img">
              <img src="images/image 47.svg" />
            </div>
            <div className="svg-img">
              <img src="images/image 48.svg" />
            </div>
            <div className="svg-img">
              <img src="images/image 49.svg" />
            </div>
          </div>
          <div className="footer-txt2">
            <p className="paragraph-text">
              Copyright &copy; Genesys Devstudio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
