import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerState, setRegisterState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorState, setErrorState] = useState({});
  const navigate = useNavigate();

  const registerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/register", registerState, {
        withCredentials: true,
      })
      .then((res) => navigate("/login"))
      .catch((err) => {
        const { errors } = err.response.data;
        const errObj = {};
        for (const [key, value] of Object.entries(errors)) {
          console.log(errors[key]);
          errObj[key] = value;
        }
        setErrorState(errObj);
      });
    setRegisterState("");
  };

  const registerChangeHandler = (e) => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Register</h1>
            <form onSubmit={registerSubmit}>
              <div className="mb-3">
                <label className="form-label"> First Name:</label>
                <input
                  className="form-control"
                  aria-describedby="firstNameHelp"
                  name="firstName"
                  type="text"
                  onChange={registerChangeHandler}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                {errorState.firstName ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    WRONG
                  </small>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label"> Last Name:</label>
                <input
                  className="form-control"
                  aria-describedby="firstNameHelp"
                  name="lastName"
                  type="text"
                  onChange={registerChangeHandler}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                {errorState.lastName ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    WRONG
                  </small>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  onChange={registerChangeHandler}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                {errorState.email ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    WRONG
                  </small>
                ) : null}
                {errorState.duplicate ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    EMAIL EXISTS
                  </small>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={registerChangeHandler}
                />
                {errorState.password ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    WRONG
                  </small>
                ) : null}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  onChange={registerChangeHandler}
                />
                {errorState.confirmPassword ? (
                  <small className="ml-1 text-danger font-weight-bold">
                    WRONG
                  </small>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
