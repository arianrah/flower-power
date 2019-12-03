import React from "react";
const plantImage = {
  height: "100px",
  width: "100px",
  borderRadius: "50%"
};
const plantCard = {
  width: "70vw",
  backgroundColor: "#FFFFFF",

  marginRight: "15vw",
  marginLeft: "15vw",
  marginTop: "10vh",
  display: "flex",
  justifyContent: "space-around"
};
const plantName = {
  paddingBottom: "40px"
};

export default function PlantCard(props) {
  return (
    <li style={plantCard}>
      <img src={props.image} alt={props.name} style={plantImage} />
      <p style={plantName}>{props.name}</p>
    </li>
  );
}
