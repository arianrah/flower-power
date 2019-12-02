import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [plantName, setPlantName] = useState("");
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__form"
          // dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <form onSubmit={event => event.preventDefault()}>
          <input
            type="text"
            name="plant-name"
            value={plantName}
            onChange={event => setPlantName(event.target.value)}
            placeholder="Plant Name"
          />

          <button onClick={() => props.addPlant(plantName)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Accordion;
