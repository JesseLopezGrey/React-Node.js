import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Carasol from "./carasol";

const Main = () => {
  const [allPirates, setAllPirates] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates")
      .then((res) => setAllPirates(res.data))
      .catch((errors) => console.log(errors));
  }, [allPirates]);

  const deleteHandler = (pirate_id) => {
    axios
      .delete(`http://localhost:8000/api/pirates/${pirate_id}`)
      .then((res) => navigate("/"))
      .catch((errors) => console.log(errors));
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="row">
        <div
          className="card-body mr-3 d-flex justify-content-around"
          style={{ backgroundColor: "yellow" }}
        >
          <h1>EDGE RUNNERS</h1>
          <h2>
            <Link className="btn btn-info" to={`/pirates`}>
              Add RUNNER
            </Link>
          </h2>
        </div>
        <Carasol></Carasol>
        <div className="col">
          {allPirates.map((pirate) => {
            return (
              <div
                className="card m-3"
                key={pirate._id}
                style={{
                  width: "18rem",
                  border: "solid",
                  borderColor: "yellow",
                  borderWidth: "5px",
                }}
              >
                <img src={pirate.url} className="card-img-top" alt="" />
                <div
                  className="card-body"
                  style={{ backgroundColor: "yellow" }}
                >
                  <h2 className="card-title">{pirate.name}</h2>
                  <div className="card-text">
                    {" "}
                    <div>
                      <Link
                        className="btn btn-info"
                        to={`/pirates/${pirate._id}`}
                      >
                        CYBERNYTICS
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandler(pirate._id)}
                      >
                        CYBER PSYCO
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Main;
