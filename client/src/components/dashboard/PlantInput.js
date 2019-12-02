import React, { useState, Fragment } from "react";

export default function plantInput(props) {
  const [plantName, setPlantName] = useState("");

  return (
    <Fragment>
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          name="plant-name"
          value={plantName}
          onChange={event => setPlantName(event.target.value)}
          placeholder="Plant Name"
        />

        <button onClick={() => props.addP(plantName)}>Submit</button>
      </form>
    </Fragment>
  );
}
