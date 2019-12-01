import React from "react";
import Button from "./DashboardButton";
import styled from "styled-components";

const DashboardListItem = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  margin-right: 15vw;
  margin-left: 15vw;
  margin-top: 10vh;
  padding-top: 5vh;
`;

const groupName = {
  margin: "0"
};

export default function DashboardCard(props) {
  return (
    <DashboardListItem>
      <p style={groupName}>{props.name}</p>
      <p> {props.plant_name}</p>
      <Button onClick={props.addPlant}> Add Plant</Button>
      <Button onClick={props.addSensor}> Add Sensor</Button>
    </DashboardListItem>
  );
}
