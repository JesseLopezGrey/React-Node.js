import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState("");
  const [phrase, setPhrase] = useState("");
  const [crewPosition, setCrewPosition] = useState("");
  const [pegLeg, setPegLeg] = useState(false);
  const [eyePatch, setEyePatch] = useState(false);
  const [hookHand, setHookHand] = useState(false);

  const { pirate_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pirates/${pirate_id}`)
      .then((res) => {
        console.log(res.data);
        const {
          name,
          url,
          number,
          phrase,
          crewPosition,
          pegLeg,
          eyePatch,
          hookHand,
        } = res.data;
        setName(name);
        setUrl(url);
        setNumber(number);
        setPhrase(phrase);
        setCrewPosition(crewPosition);
        setPegLeg(pegLeg);
        setEyePatch(eyePatch);
        setHookHand(hookHand);
      })
      .catch((errors) => console.log(errors));
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "black" }}>
      <div className="row ">
        <div
          className="card-body mr-3 d-flex justify-content-around"
          style={{ backgroundColor: "BlueViolet" }}
        >
          <h1 style={{ color: "yellow" }}>{name}</h1>
          <h1>
            <Link to={`/`} className="btn btn-info">
              EDGE Board
            </Link>
          </h1>
        </div>

        <div className="col">
          <div
            className="card card-body"
            style={{
              width: "600px",
              border: "solid",
              borderColor: "yellow",
              borderWidth: "5px",
            }}
          >
            <img src={url} alt="" />

            <h2> {phrase}</h2>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-body"
            style={{
              border: "solid",
              borderColor: "yellow",
              borderWidth: "5px",
            }}
          >
            <h1 className="text-center">About RUNNER</h1>
            <h2>Successful Heist: {number}</h2>
            <h2>Position: {crewPosition}</h2>
            <h2>Cyberware: {pegLeg === true ? "True" : "False"}</h2>
            <h2>Network: {eyePatch === true ? "True" : "False"}</h2>
            <h2>Meds: {hookHand === true ? "True" : "False"}</h2>
          </div>
          <Link className="btn btn-warning" to={`/authors/edit/${pirate_id}`}>
            Edit RUNNER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
