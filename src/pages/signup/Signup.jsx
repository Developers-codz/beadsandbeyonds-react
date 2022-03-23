import "./signup.css";
import { useState } from "react";
import { useAuth } from "context/auth-context";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "hooks";
const Signup = () => {
  useDocumentTitle("Signup");
  var classNames = require("classnames");
  const [type, setType] = useState("password");
  const formObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formObj);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { signupHandler } = useAuth();
  const clickHandler = (e) => {
    e.preventDefault();
    signupHandler(e, formData, setFormData, formObj);
  };

  return (
    <>
      <div className="signup-wrapper">
        <h3 className="register-head">Register Now : </h3>
        <div className="signup-card">
          <form>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              id="firstName"
              className="input-field"
              placeholder="Enter your first name"
              onChange={inputHandler}
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              id="lastName"
              className="input-field"
              placeholder="Enter your last name"
              onChange={inputHandler}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              className="input-field"
              placeholder="Enter your email here"
              onChange={inputHandler}
              required
            />
            <input
              type={type}
              name="password"
              value={formData.password}
              id="sign-pass"
              className="input-field"
              placeholder="Enter your password here"
              onChange={inputHandler}
              required
            />{" "}
            <i
              className={classNames(" eye reset", {
                "fa fa-eye": type === "text",
                "far fa-eye-slash": type === "password",
              })}
              onClick={() =>
                setType((type) => (type === "password" ? "text" : "password"))
              }
            ></i>
            <button
              className="signup-btn reset"
              type="submit"
              onClick={(e) => clickHandler(e)}
            >
              Sign Up
            </button>
            <div className="signin-section">
              Already have an account ?{" "}
              <u className="signin-btn">
                {" "}
                <Link to="/login" className="text-secondary decor-none">
                  Login Now
                </Link>
              </u>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Signup };
