import React, { useState, useRef } from "react";
import axios from "axios";
import Chevron from "./Chevron";

import "./Accordion.css";

function Accordion(props) {
  const [groupName, setGroupName] = useState("");
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

  // function addGroup(groupName) {
  //   // console.log(groupName);
  //   return axios({
  //     method: "post",
  //     url: "/api/groups-new",
  //     data: {
  //       group: {
  //         name: groupName,
  //         user_id: `Token token=${localStorage.getItem("user_id")}`
  //       }
  //     },
  //     headers: {
  //       Authorization: `Token token=${localStorage.getItem("token")}`
  //     }
  //   }).then(r => {
  //     console.log(r);
  //   });
  // }

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
        {/* <div>{groupName}</div> */}
        <form onSubmit={event => event.preventDefault()}>
          <input
            type="text"
            name="group-name"
            value={groupName}
            onChange={event => setGroupName(event.target.value)}
            placeholder="Group Name"
          />
          <button onClick={() => props.addGroup(groupName)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Accordion;
