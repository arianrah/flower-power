import React from "react"
import { Bar } from 'react-chartjs-2';

const dataTemp= [
  {
  id: 1,
  latitude: "49.29270935058594",
  longitude: "-123.04773712158203",
  moisture: false,
  sensor_id: 1
  },
  {
  id: 2,
  latitude: "49.29270935058594",
  longitude: "-123.04773712158203",
  moisture: true,
  sensor_id: 1
  },
  {
  id: 3,
  latitude: "49.29270935058594",
  longitude: "-123.04773712158203",
  moisture: false,
  sensor_id: 1
  },
  {
  id: 4,
  latitude: "49.29270935058594",
  longitude: "-123.04773712158203",
  moisture: true,
  sensor_id: 1
  },
  {
  id: 5,
  latitude: "49.29270935058594",
  longitude: "-123.04773712158203",
  moisture: false,
  sensor_id: 1
  }];

  export default function Chart(props){


return(
<Bar data={dataTemp} />
  )}