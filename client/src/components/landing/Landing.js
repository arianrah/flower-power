import React, { Fragment } from "react";
// import Dashboard from "../dashboard/Dashboard";

import Signup from "./Signup";
import Login from "./Login";
import useApplicationData from "../../hooks/useApplicationData";
import Plants from "../plants/Plants.js";
import PlantInput from "../dashboard/PlantInput";
import SenorInput from "../dashboard/SensorInput";

import useVisualMode from "../../hooks/useVisualMode";
import Leading from "./Leading";
import Dashboard from "../dashboard/Dashboard";

const LEADING = "LEADING";
const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";
const PLANTADD = "PLANTADD";
const SENSORADD = "SENSORADD";

export default function Landing(props) {
  const {
    plantAddDB,
    sensorAddDB,
    loginDBCall,
    userSignup,
    hasToken
  } = useApplicationData();
  const { mode, transition, back } = useVisualMode(LEADING);

  function login() {
    transition(LOGIN);
  }
  function signup() {
    transition(SIGNUP);
  }

  function signupData(email, password, firstName, lastName) {
    userSignup(email, password, firstName, lastName).then(token => {
      props.setUser(token);
    });
    // let token = localStorage.getItem("token");
    // if (!token) {
    //   back();
    // } else {
    //   transition(DASHBOARD);
    // }
  }

  function loginCheck(email, password) {
    // transition(CHECK);
    loginDBCall(email, password).then(token => {
      props.setUser(token);
    });
  }

  function addPlant(plantName) {
    plantAddDB(plantName);
  }
  function plantInputPopUp() {
    transition(PLANTADD);
  }

  function senorInputPopUp() {
    transition(SENSORADD);
  }

  function addSenor(sensorName) {
    sensorAddDB(sensorName);
  }
  return (
    <Fragment>
      {mode === LEADING && <Leading onLogin={login} onSignup={signup} />}
      {mode === LOGIN && (
        <Login
          email={props.email}
          password={props.password}
          onLogin={loginCheck}
        />
      )}
      {mode === SIGNUP && (
        <Signup
          email={props.email}
          password={props.password}
          first_name={props.firstName}
          last_name={props.lastName}
          onSignup={signupData}
        />
      )}
      {mode === PLANT && <Plants />}
      {mode === DASHBOARD && (
        <Dashboard addPlant={plantInputPopUp} addSenor={senorInputPopUp} />
      )}
      {mode === PLANTADD && (
        <PlantInput
          key={props.plantID}
          plantName={props.plantName}
          // plantImage={props.plantImage}
          addP={addPlant}
        />
      )}
      {mode === SENSORADD && (
        <SenorInput
          key={props.sensorID}
          sensorName={props.plantName}
          sensorType={props.sensorType}
          addS={addSenor}
        />
      )}
    </Fragment>
  );
}
