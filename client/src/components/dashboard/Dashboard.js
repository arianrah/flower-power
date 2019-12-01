import React, { Fragment } from "react";
import axios from "axios";
import Plants from "../plants/Plants";
import Navbar from "../navbar/NavComponent";

import DashboardComponent from "./DashboardComponent";

import useVisualMode from "../../hooks/useVisualMode";
import useApplicationData from "../../hooks/useApplicationData";
import PlantInput from "../dashboard/PlantInput";
import SenorInput from "../dashboard/SensorInput";

const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";
const PLANTADD = "PLANTADD";
const SENSORADD = "SENSORADD";

export default function Groups(props) {
  const {
    plantAddDB,
    sensorAddDB,
    loginDBCall,
    userSignup,
    hasToken
  } = useApplicationData();
  const { mode, transition, back } = useVisualMode(DASHBOARD);

  function dashboardPage() {
    transition(DASHBOARD);
  }

  function plantPage() {
    transition(PLANT);
  }
  function addPlant(plantName, plantImage) {
    plantAddDB(plantName, plantImage);
  }

  function addSenor(sensorName) {
    sensorAddDB(sensorName);
  }
  function plantInputPopUp() {
    transition(PLANTADD);
  }

  function senorInputPopUp() {
    transition(SENSORADD);
  }

  return (
    <Fragment>
      <Navbar dashboardPage={dashboardPage} plantPage={plantPage} />
      {mode === DASHBOARD && (
        <DashboardComponent
          addPlant={plantInputPopUp}
          addSensor={senorInputPopUp}
        />
      )}
      {mode === PLANTADD && (
        <PlantInput
          key={props.plantID}
          plantName={props.plantName}
          plantImage={props.plantImage}
          addP={addPlant}
        />
      )}
      {mode === SENSORADD && (
        <SenorInput
          key={props.sensorID}
          sensorName={props.sensorName}
          addS={addSenor}
        />
      )}
      {mode === PLANT && <Plants />}
    </Fragment>
  );
}
