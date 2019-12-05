import React, { Fragment } from "react";

import Navbar from "../navbar/NavComponent";

import GroupsContainer from './GroupsContainer';


import Chart from "../chart/Chart"

import useVisualMode from "../../hooks/useVisualMode";


const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";




export default function Dashboard() {


  const { mode, transition } = useVisualMode(DASHBOARD);

  function dashboardPage() {
    transition(DASHBOARD);
  }

  function plantPage() {
    transition(PLANT);
  }

  
  return (
    <Fragment>
      <Navbar dashboardPage={dashboardPage} plantPage={plantPage} />
      {mode === DASHBOARD && (
        <Fragment>
          <GroupsContainer />
        </Fragment>
      )}
   
      {mode === PLANT && <Chart
      
      />}
    </Fragment>   
  );
}
