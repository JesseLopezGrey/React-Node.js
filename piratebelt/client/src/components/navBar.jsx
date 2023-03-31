import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logoutHandler = () => {
    axios
      .post(`http://localhost:8000/api/users/logout/$`)
      .then((res) => console.log("Logged Out"))
      .catch((errors) => console.log(errors));
  };
  return (
    <div className="container">
      <div className="row">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark "
          style={{ color: "yellow" }}
        >
          <div className="container-fluid ">
            <a className="navbar-brand" href="/" style={{ color: "yellow" }}>
              NIGHT CITY
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" d-flex" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    style={{ color: "BlueViolet" }}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/"
                    style={{ color: "BlueViolet" }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <img
                    src="https://bit.ly/3V36o9Q"
                    alt=""
                    style={{
                      width: "18rem",
                    }}
                  />
                </li>
                <li className="nav-item">
                  <button className="btn btn-warning" onClick={logoutHandler}>
                    Logout
                  </button>
                </li>
                <li>
                  {" "}
                  <Link className="btn btn-info" to={`/login`}>
                    Login
                  </Link>
                  <Link className="btn btn-secondary" to={`/register`}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
