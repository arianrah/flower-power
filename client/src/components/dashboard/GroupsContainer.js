import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const getResource = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(false);  


  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return { data, error, loading }
}

const GroupWrapper = styled.ul`
  width: 70vw;
  margin: 100px auto 0;
;`;

const GroupCardWrapper = styled.li`
  list-style: none;
`;

const GroupCard = ({ group }) => (
  <>
    <h1>{group.name}</h1>
  </>
);

const GroupsCards = ({ groups }) => (
  <GroupWrapper>
  { 
    groups.map(group => (
      <GroupCardWrapper key={`group_${group.id}`}>
        <GroupCard group={group}/>
      </GroupCardWrapper>
    ))
  }
  </GroupWrapper>
)

const GroupsContainer = () => {

  const { data, error, loading } = getResource('/api/groups')

  if (error) {
    return <div>Oh Fuck</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return <GroupsCards groups={data}/>;

}

export default GroupsContainer;