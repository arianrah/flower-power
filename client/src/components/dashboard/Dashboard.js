import React, { Fragment } from "react";
import axios from "axios";
import Plants from "../plants/Plants";
import Navbar from "../navbar/NavComponent";
import Accordian from "./Accordian";
import SensorInput from "./SensorInput";
import DashboardComponent from "./DashboardComponent";
import GroupsContainer from './GroupsContainer';
import Victory from "./Victory";
import Sensor from "../sensor/Sensor"
import Chart from "../chart/Chart"

import useVisualMode from "../../hooks/useVisualMode";
import useApplicationData from "../../hooks/useApplicationData";

const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";
const PLANTADD = "PLANTADD";
const SENSORADD = "SENSORADD";

// export default function Groups(props) {

export default function Dashboard() {

  const {
    plantAddDB,
    sensorAddDB,
    // getResource,
    // loginDBCall,
    // userSignup,
    // hasToken
  } = useApplicationData();

  const { mode, transition, back } = useVisualMode(DASHBOARD);

  function dashboardPage() {
    transition(DASHBOARD);
  }

  function plantPage() {
    transition(PLANT);
  }
  function addPlant(plantName) {
    plantAddDB(plantName);
  }

  function addSensor(sensorName) {
    sensorAddDB(sensorName);
  }
  
  return (
    <Fragment>
      <Navbar dashboardPage={dashboardPage} plantPage={plantPage} />
      {mode === DASHBOARD && (
        <Fragment>
          <GroupsContainer />
        </Fragment>
      )}
      {/* <Victory /> */}
      {mode === PLANT && <Chart
      
      />}
    </Fragment>   
  );
}
