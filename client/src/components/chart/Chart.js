import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { Bar } from "react-chartjs-2"

const getResource = url => {
  const [data, setData] = useState({labels: [], datasets: [{label: 'Duration of watering ', data: [], borderWidth: 1}]});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('starting')
    axios
      .get(url)
      .then((res) => {
        //format the data 
        let chartData = {labels: [], datasets: [{label: 'Duration of watering ', data: [], borderWidth: 1}]};
        console.log(res);
        for(let row of res.data.data){
          chartData.labels.push(row.created_at);
          chartData.datasets[0].data.push(row.duration);
        }
        console.log('HERE is the stuff', chartData);
        setData(chartData)
      })
      .catch((err) => {
        console.log('error', err)
        setError(err)
      })
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

// const GroupCard = ({ group }) => (
//   <>
  
//       <GroupTitle>{group.duration}</GroupTitle>
//       <p>{group.created_at}</p>
      
     
//  </>
 
//  );
 
//  const GroupsCards = ({ groups }) => {
//    console.log('GROUPS' ,groups)
//    return ( 
//    <Fragment>
//      <GroupWrapper>
      
//     {groups.data.map(group => (
      
//       <GroupCardWrapper key={`group_${group.id}`}>
//         <GroupCard group={group} />

//       </GroupCardWrapper>
//     ))}
    
//     </GroupWrapper>
//     </Fragment>
//   )
//   }  ;

const Sensor = () => {
  const { data, error, loading } = getResource("/api/sensor-history");
  
  if (error) {
    return <div>Oops</div>;
  }
  
  if (loading) {
    return <div>...loading</div>;
  }
  console.log("data",data.data)

  return (
  <Bar data={data} />
  );
  
};

export default Sensor;


