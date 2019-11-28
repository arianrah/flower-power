import React, { useState } from "react";
import Button from "./DashboardButton";
import styled from "styled-components";

const PlantInputComponents = styled.div`
width: 500px;
height: 100px;
background-color: white;
`

export default function plantInput(props) {
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");

  return (
    <li>
    <form onSubmit={event => event.preventDefault()}>
      <PlantInputComponents>
      <input
        type="text"
        name="plant-name"
        value={plantName}
        onChange={event => setPlantName(event.target.value)}
        placeholder="Plant Name"
      />
      
      <input
        type="text"
        name="plant-image"
        value={plantImage}
        onChange={event => setPlantImage(event.target.value)}
        placeholder="Image Name"
      />
      <Button onClick={() => props.addP(plantName, plantImage)}>Submit</Button>
      </PlantInputComponents>
    </form>
    </li>
  );
}
