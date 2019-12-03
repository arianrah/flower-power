import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

const getResource = url => {
  const [data, setData] = useState({data: []});
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
  
      <GroupTitle>{group.sensor_id}</GroupTitle>
 
      
     
 </>
 
 );
 
 const GroupsCards = ({ groups }) => {
   console.log('GROUPS' ,groups)
   return ( 
   <Fragment>
    <GroupWrapper>
      
    {groups.data.map(group => (
      
      <GroupCardWrapper key={`group_${group.id}`}>
        <GroupCard group={group} />

      </GroupCardWrapper>
    ))}
    
    </GroupWrapper>
    </Fragment>
  )
  }  ;

const Sensor = () => {
  const { data, error, loading } = getResource("/api/sensor-history");
  
  if (error) {
    return <div>Oops</div>;
  }
  
  if (loading) {
    return <div>...loading</div>;
  }
  console.log(data.data)

  return <GroupsCards groups={data} />;
  
};

export default Sensor;


