import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import Button from "./DashboardButton";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [sensorName, setSensorName] = useState("");

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
        <div className="accordion__form" />
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
      </div>
    </div>
  );
}

export default Accordion;
