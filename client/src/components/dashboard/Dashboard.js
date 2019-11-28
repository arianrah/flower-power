import React from "react";
import axios from "axios";
import Plants from "../plants/Plants";
import DashboardCard from "../dashboard/DashboardCard"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const temp = [
  {
   name: "Group One",
   plant_name: "fred"
  },
  {
    name: "Group Two",
    plant_name: "jen"
  },
  {
    name: "Group Three",
    plant_name: "Audrey Two"
  }
]

export default function Groups(props) {
  const groups = temp.map(group => (
    <DashboardCard key={group.id} addPlant={props.addPlant} name={group.name} plant_name={group.plant_name} />
  ));
  return <ul >{groups}</ul>;
}

// export default function dashboard(temp) {
//   return (
//     <>
//       <h1>DASHBOARD</h1>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/plants">Plants</Link>
//               </li>
//               {/* <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li> */}
//             </ul>
//           </nav>
//           <Switch>
//             <Route path="/plants">
//               <Plants />
//             </Route>
//             {/* <Route path="/dashboard">
//             <Dashboard />
//           </Route> */}
//           </Switch>
//         </div>
//       </Router>
//     </>
//   );
// }
