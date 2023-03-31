import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Edit = () => {
  const { pirate_id } = useParams();
  console.log(pirate_id, "toyoyoyoy");
  const navigate = useNavigate();

  // STATE
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState("");
  const [phrase, setPhrase] = useState("");
  const [crewPosition, setCrewPosition] = useState("");
  const [pegLeg, setPegLeg] = useState(false);
  const [eyePatch, setEyePatch] = useState(false);
  const [hookHand, setHookHand] = useState(false);

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
  const [errors, setErrors] = useState([]);
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [phraseError, setPhraseError] = useState("");
  const [crewPositionError, setCrewPositionError] = useState("");

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
  const updateUser = (e) => {
    e.preventDefault();
    let updateBody = {
      name,
      url,
      number,
      phrase,
      crewPosition,
      pegLeg,
      eyePatch,
      hookHand,
    };
    // MAKE PUT REQUEST TO EXPRESS
    axios
      .put(`http://localhost:8000/api/pirates/${pirate_id}`, updateBody)
      .then((res) => navigate(`/pirates/${pirate_id}`))
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messowns in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messowns
          errorArr.push(errorResponse[key].messown);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div className="container fs-2">
      <div className="row">
        <div
          className="card-body mr-3 d-flex justify-content-around"
          style={{ backgroundColor: "yellow" }}
        >
          <h1>EDGE RUNNERS</h1>
          <h2>
            <Link className="btn btn-info" to={`/`}>
              RUNNER Board
            </Link>
          </h2>
        </div>
        <div className="col-md-5 ">
          <div
            className="d-flex justify-content-between"
            style={{ backgroundColor: "aqua" }}
          >
            <h1>Edit RUNNER</h1>
          </div>
          <form
            style={{ backgroundColor: "grey" }}
            className="form-group form-control"
            onSubmit={updateUser}
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
              <label htmlFor="">Successful Heist:</label>

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
            <p>
              <label htmlFor="">Crew Postion:</label>
              <select value={crewPosition} onChange={crewPositionHandler}>
                <option value="none">Select Crew Postion</option>
                <option value="Netrunner">Netrunner</option>
                <option value="Solo">Solo</option>
                <option value="Fixer">Fixer</option>
                <option value="Corpo">Corpo</option>
                <option value="Nomad">Nomad</option>
              </select>
            </p>
            {crewPositionError ? <p>{crewPositionError}</p> : null}

            <p>
              <label htmlFor="">Cyberware:</label>
              <input
                type="checkbox"
                checked={pegLeg}
                onChange={(e) => setPegLeg(e.target.checked)}
              />
            </p>
            <p>
              <label htmlFor="">Network:</label>
              <input
                type="checkbox"
                checked={eyePatch}
                onChange={(e) => setEyePatch(e.target.checked)}
              />
            </p>
            <p>
              <label htmlFor="">Meds: </label>
              <input
                type="checkbox"
                checked={hookHand}
                onChange={(e) => setHookHand(e.target.checked)}
              />
            </p>
            <button className="btn btn-warning">Update RUNNER</button>
          </form>
          {errors.map((error) => (
            <p>{error}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Edit;
