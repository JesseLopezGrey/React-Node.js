import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState("");
  const [phrase, setPhrase] = useState("");
  const [crewPosition, setCrewPosition] = useState("");
  const [pegLeg, setPegLeg] = useState(false);
  const [eyePatch, setEyePatch] = useState(false);
  const [hookHand, setHookHand] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [phraseError, setPhraseError] = useState("");
  const [crewPositionError, setCrewPositionError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    let body = {
      name,
      url,
      number,
      phrase,
      crewPosition,
      pegLeg,
      eyePatch,
      hookHand,
    };
    axios
      .post("http://localhost:8000/api/pirates", body, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setErrors([]);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].messown);
        }
        setErrors(errorArr);
      });
  };

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setNameError(" Name must be longer than 3 charaters");
    } else {
      setNameError("");
    }
  };

  const urlHandler = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
    if (e.target.value.length < 5) {
      setUrlError(" Url must be working url");
    } else {
      setUrlError("");
    }
  };

  const numberHandler = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
    if (e.target.value.length < 0) {
      setNumberError(" Number must be interger");
    } else {
      setNumberError("");
    }
  };

  const phraseHandler = (e) => {
    e.preventDefault();
    setPhrase(e.target.value);
    if (e.target.value.length < 3) {
      setPhraseError(" Phrase must be longer than 3 charaters");
    } else {
      setPhraseError("");
    }
  };
  const crewPositionHandler = (e) => {
    e.preventDefault();
    setCrewPosition(e.target.value);
    if (e.target.value.length < 0) {
      setCrewPositionError("you must select lang");
    } else {
      setCrewPositionError("");
    }
    console.log();
  };
  return (
    <div className="container mt-5 fs-2">
      <div className="row">
        <div className="col-md-5 ">
          <div
            className="d-flex justify-content-between"
            style={{ backgroundColor: "yellow" }}
          >
            <h1>Add Edge Runner</h1>
            <h1>
              <Link className="btn btn-info" to={`/`}>
                Crew Board
              </Link>
            </h1>
          </div>
          <form
            style={{ backgroundColor: "grey" }}
            className="form-group form-control"
            onSubmit={createUser}
          >
            <div>
              <label htmlFor="">Name:</label>

              <input type="text" value={name} onChange={nameHandler} />
              <div className=" text-muted h6 text-danger">
                {nameError ? <p>{nameError}</p> : null}
              </div>
            </div>
            <div>
              <label htmlFor=""> Image Url:</label>

              <input type="text" value={url} onChange={urlHandler} />
              <div className="text-muted h6 text-danger">
                {urlError ? <p>{urlError}</p> : null}
              </div>
            </div>
            <div>
              <label htmlFor=""># of Treasure Chest:</label>

              <input type="number" value={number} onChange={numberHandler} />
              <div className="text-muted h6 text-danger">
                {numberError ? <p>{numberError}</p> : null}
              </div>
            </div>
            <div>
              <label htmlFor="">Pirate Catch Phrase:</label>

              <input type="text" value={phrase} onChange={phraseHandler} />
              <div className="text-muted h6 text-danger">
                {phraseError ? <p>{phraseError}</p> : null}
              </div>
            </div>
            <div>
              <label htmlFor="">Crew Postion:</label>
              <select value={crewPosition} onChange={crewPositionHandler}>
                <option value="none">Select Crew Postion</option>
                <option value="Netrunner">Netrunner</option>
                <option value="Solo">Solo</option>
                <option value="Fixer">Fixer</option>
                <option value="Corpo">Corpo</option>
                <option value="Nomad">Nomad</option>
              </select>
            </div>
            {crewPositionError ? <p>{crewPositionError}</p> : null}

            <div>
              <label htmlFor="">Cyberware:</label>
              <input
                type="checkbox"
                checked={pegLeg}
                onChange={(e) => setPegLeg(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="">EyePatch:</label>
              <input
                type="checkbox"
                checked={eyePatch}
                onChange={(e) => setEyePatch(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="">HookHand:</label>
              <input
                type="checkbox"
                checked={hookHand}
                onChange={(e) => setHookHand(e.target.checked)}
              />
            </div>
            <button className="btn btn-success">Add RUNNER</button>
          </form>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
