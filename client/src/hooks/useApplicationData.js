// import { useEffect, useReducer } from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";

export default function useApplicationData() {
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_PLANT = "SET_PLANT";

  function reducer(state, action) {
    switch (action.type) {
      case SET_APPLICATION_DATA:
        return {
          ...state,
          sensortypes: action.value.sensortypes,
          sensors: action.value.sensors,
          plants: action.value.plants,
          sensorhistory: action.value.sensorhistory,
          groups: action.value.groups,
          groupplantssensors: action.value.groupplantssensors
        };
      case SET_PLANT:
        return {
          ...state,
          plants: action.value
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  function userSignup(email, password, firstName, lastName) {
  return axios({
    method: "post",
    url: "/api/register",
    data: {
      user: {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password
      }
    }
    // ,
    // headers: {
    //   Authorization: "Token token=hello"
    // }
  }).then(response => {
    const token = response.data.token;
    if (response.data.status !== 401) {
      localStorage.setItem("token", token);
    }
    return token;
  });
}

function loginDBCall(email, password) {
  return axios({
    method: "post",
    url: "/api/login",
    data: {
      user: {
        email: email,
        password: password
      }
    }
  }).then(response => {
    const token = response.data.token;
    if (response.data.status !== 401) {
      localStorage.setItem("token", token);
    }
    return token;
  });
}
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    Promise.all([
      axios.get(`/api/sensor-type`),
      axios.get(`/api/sensors`),
      axios.get(`/api/plants`),
      axios.get(`/api/sensor-history`),
      axios.get('/api/groups'),
      axios.get('/api/group-plants-sensors')
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          sensortypes: all[0].data,
          sensors: all[1].data,
          plants: all[2].data,
          sensorhistory: all[3].data,
          groups: all[4].data,
          groupplantssensors: all[5].data
        }
      });
    });
  }, []);
  console.log("STATE", state);
  return { state, loginDBCall, userSignup };
}
