import React from "react";
import BgDashboard from "./BgDashboard";
import DashboardCard from "../dashboard/DashboardCard";
import DashboardUL from "./DashboardUL";
import AccordionGroup from "./AccordianGroup";

const temp = [
  {
    name: "Group One",
    plant_name: ["fred", " joon"],
    sensor_name: "pipipi"
  },
  {
    name: "Group Two",
    plant_name: "jen"
  },
  {
    name: "Group Three",
    plant_name: "Audrey Two"
  }
];

export default function DashboardComponent(props) {
  const groups = temp.map(group => (
    <DashboardCard
      key={group.id}
      sensor_name={group.sensor_name}
      name={group.name}
      plant_name={group.plant_name}
      addPlant={props.addPlant}
      addSensor={props.addSensor}
    />
  ));

  return (
    <BgDashboard>
      <DashboardUL>
        {groups}
        <DashboardCard>
          <AccordionGroup />
        </DashboardCard>
      </DashboardUL>
    </BgDashboard>
  );
}
