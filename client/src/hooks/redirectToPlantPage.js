import React from "react";
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function redirectToPlantPage() {
  return <Redirect to="../plants/Plants.js" />;
}
