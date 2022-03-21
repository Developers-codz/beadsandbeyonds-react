import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginHandler } from "hooks/auth";

const Login = () => {
  const formObj = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formObj);
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              type="password"
              name="password"
              id="login-pass"
              value={formData.password}
              className="input-field"
              placeholder="Enter your password here"
              onChange={changeHandler}
              required
            />{" "}
            <i className="far fa-eye-slash eye reset" id="eye-btn"></i>
            <button
              className="demo-login reset"
              value="test"
              type="submit"
              onClick={(e) => loginHandler(e, formData)}
            >
              Login With Test Credentials
            </button>
            <button
              className="login-btn reset"
              type="submit"
              value="user"
              onClick={(e) => loginHandler(e, formData)}
            >
              Login{" "}
            </button>
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
