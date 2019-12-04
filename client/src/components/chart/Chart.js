import React from "react";
import { Bar } from 'react-chartjs-2';
const temp = {1:1,
2:2,
3:3};
 export default function Chart(props) {
 return(
   <Bar
   data={temp}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}/>
 )

};