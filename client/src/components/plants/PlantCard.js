import React from "react";

export default function PlantCard(props) {
  console.log("inside Plant card", props);
  return (
    <li>
      <img src={props.image} alt={props.name} />
      {props.name}
    </li>
  );
}
