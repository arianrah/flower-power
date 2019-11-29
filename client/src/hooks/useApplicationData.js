// import { useEffect, useReducer } from "react";
import React from "react";
import axios from "axios";
// import "components/Application.scss";
// axios.defaults.headers.post["HTTP_AUTHORIZATION"] = "hello";
// axios.defaults.headers.get["HTTP_AUTHORIZATION"] = "hello";
export default function useApplicationData() {
  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`/api/days`),
  //     axios.get(`/api/appointments`),
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
    axios({
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
      localStorage.setItem("token", response.data.token);
    });
  }
  function loginDBCall(email, password) {
    axios({
      method: "post",
      url: "/api/login",
      data: {
        user: {
          email: email,
          password: password
        }
      }
    }).then(response => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
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
      url: "/api/sensor#new",
      data: {
        name: name
      }
    });
  }

  return { plantAddDB, loginDBCall, userSignup, sensorAddDB };
}
