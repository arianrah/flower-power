import React from "react";
import BgDashboard from "./BgDashboard";
import DashboardCard from "../dashboard/DashboardCard";
import DashboardUL from "./DashboardUL";
import AccordionGroup from "./AccordianGroup";
import styled from "styled-components";


const GroupStyle = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  margin-right: 15vw;
  margin-left: 15vw;
  margin-top: 10vh;
  padding-top: 5vh;
`;

export default function DashboardComponent(props) {
  const groups = props.data.map(group => (
    <DashboardCard
    plantName={group.plant.name}
    sensorName={group.sensor.name}
      addPlant={props.addPlant}
      addSensor={props.addSensor}
    />
  ));

  return (
    <BgDashboard>
      <DashboardUL>
        {groups}
        <GroupStyle>
          <AccordionGroup />
        </GroupStyle>
      </DashboardUL>
    </BgDashboard>
  );
}
