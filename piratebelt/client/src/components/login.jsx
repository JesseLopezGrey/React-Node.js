import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/login", loginState, {
        withCredentials: true,
      })
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const loginChangeHandler = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={loginChangeHandler}
                name="email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={loginChangeHandler}
                name="password"
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
