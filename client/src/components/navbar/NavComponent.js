import React from "react";

import NavButton from "./NavButton";

const navStyle = {
  backgroundColor: "transparent",
  width: "100vw",
  position: "fixed",
  zIndex: "2",
  display: "flex",
  justifyContent: "space-between"
};

const navButtonDiv = {
  display: "flex"
};

export default function NavComponent(props) {
  return (
    <nav style={navStyle}>
      <img src="/plantastic_logo.png" alt="plantastic logo" />
      <div style={navButtonDiv}>
        <NavButton onClick={props.plantPage}>Plants</NavButton>
        <NavButton onClick={props.dashboardPage}>Dashboard</NavButton>
      </div>
    </nav>
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
