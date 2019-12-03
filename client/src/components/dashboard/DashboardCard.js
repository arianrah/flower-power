import React from "react";
import Button from "./DashboardButton";
import Accordian from "./Accordian";
import styled from "styled-components";
import PlantInput from "./PlantInput";
import AccordianSensor from "./AccordianSensor";
import AccordianPlants from "./AccordianPlants";

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


// const GroupsCards = ({
//   groups
// }) => (
//   <ul>
//   {
//     groups.map(group => (
//       <li>
//         <Group group={group} />
//       </li>
//     ))
//   }
//   </ul>
// )


export default function DashboardCard(props) {
  return (
    <DashboardListItem>
      <p style={groupName}>{props.DashboardContainer}}</p>
      <p> {props.plant_name}</p>
      <AccordianPlants
        title="add plant"
        addPlant={props.addPlant}
        plantName={props.plantName}
        plantKey={props.plantID}
      />

      <AccordianSensor
        title="add sensor"
        addSensor={props.addSensor}
        sensorKey={props.sensorID}
        sensorName={props.sensorName}
      />
    </DashboardListItem>
  );
}
