import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import axios from "axios";
// import useVisualMode from "../../hooks/useVisualMode";
import AccordianSensor from "./AccordianSensor";
import "./Accordion.css";

export default function Accordion(props) {
  const [plantName, setPlantName] = useState("");
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  // const DASHBOARD = "DASHBOARD";
  // const { mode, transition, back } = useVisualMode(DASHBOARD);

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
  function addPlant(plantName, group) {
    return axios({
      method: "post",
      url: `/api/groups/${group.id}/plants`,
      data: {
        plant: {
          name: plantName
        }
      },
      headers: {
        Authorization: `Token token=${localStorage.getItem("token")}`
      }
    }).then(r => {
      console.log(r);
      // transition(DASHBOARD);
    });
  }
  return (
    <>
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
            {/* <h1>GROUP: {props.group.id}</h1> */}
            <button onClick={() => addPlant(plantName, props.group)}>
              Submit
            </button>
          </form>
          <AccordianSensor title="Add Sensor" group={props.group} />
        </div>
      </div>
    </>
  );
}
