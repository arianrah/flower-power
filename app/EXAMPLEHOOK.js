

// const getResource = url => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);  
//   const [loading, setLoading] = useState(false);  


//   useEffect(() => {
//     setLoading(true);
//     axios.get(url)
//       .then(res => setGroups(res.data))
//       .catch(err => setError(err));
//       .done(() => setLoading(false))
//   }, []);

//   return { data, error, loading }
// }

// const GroupContainer = () => {

//   const { data, error, loading } = getResource('/api/groups')

//   if (error) {
//     return <div>Oh Fuck</div>;
//   }

//   if (loading) {
//     return <div>...loading</div>;
//   }

//   return <GroupsCards groups={data}/>;

// }

// const GroupsCards = ({
//   groups
// }) => (
//   <ul>
//   {
//     groups.map(group => (
//       <li>
//         <Group group={group}/>
//       </li>
//     )
//   }
//   </ul>
// )

// const Group = ({ group }) => (
//   <div>
//     <h1>{group.name}</h1>
//     <ul>
//     {
//       group.plants.map(plant => (
//         <li>{plant.name}</h1>
//       ))
//     }
//     </ul>
//   </div>
// )