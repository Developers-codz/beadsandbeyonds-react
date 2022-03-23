import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useDocumentTitle } from "hooks";

const Login = () => {
  useDocumentTitle("Login");
  var classNames = require("classnames");
  const [type, setType] = useState("password");
  const formObj = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formObj);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const {
    loginHandler,
    authState: { msg },
  } = useAuth();
  const clickHandler = (e) => {
    e.preventDefault();
    loginHandler(e, formData);
  };
  console.log(msg);

  return (
    <>
      <div className="Login-wrapper">
        <h3 className="wishlist-head">Login Now : </h3>
        <div className="login-card">
          <form action="login.html">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              className="input-field"
              placeholder="Enter your email here"
              onChange={changeHandler}
              required
            />
            <input
              type={type}
              name="password"
              id="login-pass"
              value={formData.password}
              className="input-field"
              placeholder="Enter your password here"
              onChange={changeHandler}
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
              className="demo-login reset"
              value="test"
              type="submit"
              onClick={(e) => clickHandler(e)}
            >
              Login With Test Credentials
            </button>
            <button
              className="login-btn reset"
              type="submit"
              value="user"
              onClick={(e) => clickHandler(e)}
            >
              Login{" "}
            </button>
            <div style={{ color: "red" }}>{msg}</div>
            <div className="signin-section">
              Don't have an account{" "}
              <u className="signin-btn">
                {" "}
                <Link to="/signup" className="text-secondary decor-none">
                  Create Now
                </Link>
              </u>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Login };
