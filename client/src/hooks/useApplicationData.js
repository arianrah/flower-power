// import { useEffect, useReducer } from "react";
import React from "react";
import axios from "axios";
// import "components/Application.scss";
// axios.defaults.headers.post["HTTP_AUTHORIZATION"] = "hello";
// axios.defaults.headers.get["HTTP_AUTHORIZATION"] = "hello";
export default function useApplicationData() {
  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`/api/api/sensors`)
  //     axios.get(`/api/user-sensors`),
  //     axios.get(`/api/plants`),
  //     axios.get(`/api/interviewers`)
  //   ]).then(all => {
  //     dispatch({
  //       type: SET_APPLICATION_DATA,
  //       value: {
  //         days: all[0].data,
  //         appointments: all[1].data,
  //         interviewers: all[2].data
  //       }
  //     });
  //   });
  // }, []);

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
  function plantAddDB(name, image) {
    console.log(`name: ${name}, image: ${image}`);
    axios({
      method: "post",
      url: "/api/plants#new",
      data: {
        name: name,
        image: image
      }
    });
  }
  function sensorAddDB(name) {
    axios({
      method: "post",
      url: "/api/sensors#new",
      data: {
        name: name
      }
    });
  }

  return { plantAddDB, loginDBCall, userSignup, sensorAddDB };
}
