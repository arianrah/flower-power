import React, { Fragment } from "react";
import axios from "axios";
import Plants from "../plants/Plants";

import DashboardComponent from "./DashboardComponent";

import useVisualMode from "../../hooks/useVisualMode";
import useApplicationData from "../../hooks/useApplicationData";
import PlantInput from "../dashboard/PlantInput";
import SenorInput from "../dashboard/SensorInput";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const PLANT = "PLANT";
const DASHBOARD = "DASHBOARD";
const PLANTADD = "PLANTADD";
const SENSORADD = "SENSORADD";

export default function Groups(props) {
  const {
    plantAddDB,
    sensorAddDB,
    loginDBCall,
    userSignup,
    hasToken
  } = useApplicationData();
  const { mode, transition, back } = useVisualMode(DASHBOARD);

  function addPlant(plantName, plantImage) {
    plantAddDB(plantName, plantImage);
  }

  function addSenor(sensorName) {
    sensorAddDB(sensorName);
  }
  function plantInputPopUp() {
    transition(PLANTADD);
  }

  function senorInputPopUp() {
    transition(SENSORADD);
  }

  return (
    <Fragment>
      {mode === DASHBOARD && (
        <DashboardComponent
          addPlant={plantInputPopUp}
          addSensor={senorInputPopUp}
        />
      )}
      {mode === PLANTADD && (
        <PlantInput
          key={props.plantID}
          plantName={props.plantName}
          plantImage={props.plantImage}
          addP={addPlant}
        />
      )}
      {mode === SENSORADD && (
        <SenorInput
          key={props.sensorID}
          sensorName={props.sensorName}
          addS={addSenor}
        />
      )}
    </Fragment>
  );
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
