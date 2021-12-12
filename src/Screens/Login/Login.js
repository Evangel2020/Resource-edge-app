import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value);

    setTimeout(function () {
      if (e.target.value.includes(".com")) {
        setShow(!show);
      }
    }, 10000);
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
            <div>
              <h3>Log in</h3>
              <p>Access your resource edge account</p>
            </div>

            {!show && (
              <div>
                <p>{email}</p>
              </div>
            )}

            {show ? (
              <>
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
              </>
            ) : (
              <>
                <label>
                  Password{" "}
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div
                  className={password.length === 6 ? "empty-box" : "empty-div"}
                ></div>{" "}
              </>
            )}

            <Link to="forgot" className="forgot-text">
              <p>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
