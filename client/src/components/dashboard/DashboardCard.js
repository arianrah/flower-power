import React from "react";
import Button from "./DashboardButton"



export default function DashboardCard(props) {
  return (
    <li>
      <p >{props.name}</p>
      <p> {props.plant_name}</p>
      <Button onClick={props.addPlant}> Add Plant</Button>
      <Button onClick={props.addSensor}> Add Sensor</Button>
    </li>
      
)}