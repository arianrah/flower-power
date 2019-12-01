import React, { useState } from "react";
import Button from "./DashboardButton";
import styled from "styled-components";

const SensorInputComponents = styled.div`
  width: 500px;
  height: 100px;
  background-color: white;
`;

export default function sensorInput(props) {
  const [sensorName, setSensorName] = useState("");

  return (
    <li>
      <form onSubmit={event => event.preventDefault()}>
        <SensorInputComponents>
          <input
            type="text"
            name="sensor-name"
            value={sensorName}
            onChange={event => setSensorName(event.target.value)}
            placeholder="Sensor Name"
          />

          <Button onClick={() => props.addS(sensorName)}>Submit</Button>
        </SensorInputComponents>
      </form>
    </li>
  );
}
