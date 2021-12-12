import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reset.css";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);

    setTimeout(function () {
      if (e.target.value.includes(".com")) {
        setShow(!show);
        localStorage.setItem("email", e.target.value);
      }
    }, 6000);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    setTimeout(function () {
      if (e.target.value.length === 6) {
        navigate("/dashboard");
      }
    }, 6000);
  };

  return (
    <div className="login-container">
      <div>
        <div className="login-image">
          <img src={`${process.env.PUBLIC_URL}/images/image 12.jpg`} />
          <h1>resource edge</h1>
        </div>
        <div className="login-box">
          <div className="box-width">
            {show ? (
              <>
                <div>
                  <h3>Reset Password</h3>
                  <p>To enable us reset your pass, enter your email below</p>
                </div>

                <label>
                  Email Address
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => emailHandler(e)}
                  />
                </label>
                <div
                  className={email.includes(".com") ? "empty-box" : "empty-div"}
                ></div>

                <hr />

                <a href="login" className="forgot-text">
                  <p>Back to Login</p>
                </a>
              </>
            ) : (
              <>
                <div style={{ width: "100%" }}>
                  <h3>Reset Password</h3>
                </div>
                <div className="resetimg">
                  <img src={`${process.env.PUBLIC_URL}/images/image 38.jpg`} />
                </div>
                <div style={{ width: "100%" }}>
                  <p>A recovery email has been sent to your email address</p>
                </div>
                <hr />

                <a href="login" className="forgot-text">
                  <p>Back to Login</p>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
