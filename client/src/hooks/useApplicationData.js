// import { useEffect, useReducer } from "react";
import { useEffect, useReducer, useState } from "react";
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
    }).then(response => {
      const token = response.data.token;
      const id = response.data.user_id;
      if (response.data.status !== 401) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", id);
      }
      // console.log(window.localstorage.getItem("token"));
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
      // ,
      // headers: {
      //   Authorization: `Token token=${window.localstorage.getItem("token")}`
      // }
    }).then(response => {
      const token = response.data.token;
      const id = response.data.user_id;
      if (response.data.status !== 401) {
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", id);
      }
      return token;
    });
  }
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    Promise.all([
      axios.get(`/api/sensor-type`, {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      }),
      axios.get(`/api/sensors`, {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      }),
      axios.get(`/api/plants`, {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      }),
      axios.get(`/api/sensor-history`, {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      }),
      axios.get("/api/groups", {
        headers: {
          Authorization: `Token token=${localStorage.getItem("token")}`
        }
      })
      // axios.get("/api/group-plants-sensors", {
      //   headers: {
      //     Authorization: `Token token=${localStorage.getItem("token")}`
      //   }
      // })
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          sensortypes: all[0].data,
          sensors: all[1].data,
          plants: all[2].data,
          sensorhistory: all[3].data,
          groups: all[4].data
        }
      });
    });
  }, []);

  function getResource(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => setError(err))
        .done(() => setLoading(false));
    }, []);

    return { data, error, loading };
  }

  return { state, loginDBCall, userSignup, getResource };
}
