import React from "react";
// import styled from "styled-components";
// import PlantImage from "./PlantImage";
import PlantCard from "./PlantCard";

const props = [
  {
    id: 4,
    name: "Audry 2",
    image: "/flowers.jpg"
  },
  {
    id: 2,
    name: "Party Time",
    image: "/cacti.jpg"
  }
];
const plantCardOrder = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0",
  padding: "0"
};

export default function Plants() {
  const plants = props.map(plant => (
    <PlantCard 
    key={plant.id}
    name={plant.name}
    image={plant.image} 
    />
  ));
  return <ul style={plantCardOrder}>{plants}</ul>;
}
// export default Plants;
