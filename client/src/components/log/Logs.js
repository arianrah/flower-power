import {React, useState} from "react";
import LogCard from "./LogCard";
import axios from "axios";



export default function Logs(props) {
  
  const logs= props.map(log => (
    <LogCard key={log.id} moisture={log.moisture} />
  ))
}