import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import BgDashboard from "./BgDashboard";
import AccordianSensor from "./AccordianSensor";
import AccordianPlants from "./AccordianPlants";
import AccordianGroup from "./AccordianGroup";

const getResource = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

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

const GroupCard = ({ group }) => (
  <>
    <GroupTitle>{group.name}</GroupTitle>
    {group.plants.map(plant => (
      <p>{plant.name}</p>
    ))}
    {group.sensors.map(sensor => (
      <p>{sensor.sensor_type_id}</p>
    ))}
  </>
);

const GroupsCards = ({ groups }) => (
  <BgDashboard>
    <GroupWrapper>
      {groups.map(group => (
        <GroupCardWrapper key={`group_${group.id}`}>
          <GroupCard group={group} />
          <AccordianPlants title="Add Plant" />
          <AccordianSensor title="Add Sensor" />
        </GroupCardWrapper>
      ))}
      <GroupCardWrapper>
        <AccordianGroup title="Add Group" />
      </GroupCardWrapper>
    </GroupWrapper>
  </BgDashboard>
);

const GroupsContainer = () => {
  const { data, error, loading } = getResource("/api/groups");

  if (error) {
    return <div>Oops</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return <GroupsCards groups={data} />;
};

export default GroupsContainer;
