import React, { Fragment } from "react";
import styled from "styled-components";
import PlantImage from "./PlantImage";
import PlantCard from "./PlantCard";

const props = [
  {
    id: 4,
    name: "Audry 2",
    image: "https://unsplash.com/photos/70l1tDAI6rM"
  },
  {
    id: 2,
    name: "Party Time",
    image: "https://unsplash.com/photos/vsrEr7otP2o"
  }
];

const PlantName = styled.h1`
  background-color: yellow;
`;

export default function Plants() {
  const plants = props.map(plant => (
    <PlantCard key={plant.id} name={plant.name} image={plant.image} />
  ));
  return <section>{plants}</section>;
}
// export default Plants;
