import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import BgDashboard from "./BgDashboard";
import AccordianSensor from "./AccordianSensor";
import AccordianPlants from "./AccordianPlants";
import AccordianGroup from "./AccordianGroup";
// import useVisualMode from "../../hooks/useVisualMode";
// const DASHBOARD = "DASHBOARD";
// const { mode, transition, back } = useVisualMode(DASHBOARD);

let user_token = localStorage.getItem("token");

const getResource = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      })
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  console.log("DATA: ", data);
  return { data, error, loading };
};

const GroupTitle = styled.h1`
  margin: 0;
`;

const GroupWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const GroupCardWrapper = styled.li`
  list-style-type: none;
  background-color: #ffffff;
  margin-right: 15vw;
  margin-left: 15vw;
  margin-top: 10vh;
  padding-top: 5vh;
`;

const GroupCard = ({ group, groupName }) => (
  <>
    <GroupTitle>{group.name}</GroupTitle>
    {group.plants.map(plant => (
      <p>{plant.name}</p>
    ))}
    {group.sensors.map(sensor => (
      <p>{sensor.sensor_type_id}</p>
    ))}
    <GroupTitle>{groupName}</GroupTitle>
    {/* <p>{plant.name}</p>
    <p>{sensor.sensor_type_id}</p> */}
  </>
);

function addPlant(plantName, group) {
  console.log(user_token);
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
  });
}

const GroupsCards = ({ groups, addGroup }) => {
  return (
    <BgDashboard>
      <GroupWrapper>
        {groups.map(group => (
          <GroupCardWrapper key={`group_${group.id}`}>
            {/* <h1>GROUP ID: {group.id}</h1> */}
            <GroupCard group={group} />
            <AccordianPlants
              title="Add Plant"
              addPlant={addPlant}
              group={group}
            />
            {/* <AccordianSensor title="Add Sensor" group={group} /> */}
          </GroupCardWrapper>
        ))}
        <GroupCardWrapper>
          <AccordianGroup title="Add Group" addGroup={addGroup} />
        </GroupCardWrapper>
      </GroupWrapper>
    </BgDashboard>
  );
};

const GroupsContainer = () => {
  const [groupsData, setGroupsData] = useState([]);
  const [groupState, setGroupState] = useState("");
  const { data, error, loading } = getResource("/api/groups");
  // console.log("data at the top!", data);
  useEffect(() => {
    console.log("inside useEffect/data", data);
    setGroupsData(data);
  }, [data]);

  function addGroup(groupName) {
    // console.log("addGroup check:", groupName);
    setGroupState(groupName);
    return axios({
      method: "post",
      url: "/api/groups-new",
      data: {
        group: {
          name: groupName,
          user_id: `Token token=${localStorage.getItem("user_id")}`
        }
      },
      headers: {
        Authorization: `Token token=${localStorage.getItem("token")}`
      }
    }).then(r => {
      const lastGroup = {
        id: 123123,
        name: groupName,
        plants: Array(0),
        sensors: Array(0)
      };
      // data.push(lastGroup);
      console.log("lastGroup sfsfd:", lastGroup);
      setGroupsData([...data, lastGroup]);
    });
  }

  if (error) {
    return <div>Oops</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }
  console.log("data:", data);
  console.log("groupsData:", groupsData);
  return (
    <>
      {/* <div>{groupState}</div> */}
      <GroupsCards groups={groupsData} addGroup={addGroup} />
    </>
  );
};

export default GroupsContainer;
