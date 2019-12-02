import React, { useState } from "react";
import Button from "./DashboardButton";

const SensorInput = function(props) {
  const [sensorName, setSensorName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      <input
        type="text"
        name="sensor-name"
        value={sensorName}
        onChange={event => setSensorName(event.target.value)}
        placeholder="Sensor Name"
      />

      <Button onClick={() => props.addSensor(sensorName)}>Submit</Button>
    </form>
  );
};
export default SensorInput;
