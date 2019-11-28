import React from "react";
const plantImage = {
  height: "100px",
  width: "100px",
  borderRadius: "50%"
};
const plantCard = {
  width: "70vw",
  backgroundColor: "#FFFFFF",
  display: "Block",
  marginRight: "15vw",
  marginLeft: "15vw",
  marginTop: "10vh"
};

export default function PlantCard(props) {
  return (
    <il style={plantCard}>
      <img src={props.image} alt={props.name} style={plantImage} />
      {props.name}
    </il>
  );
}
