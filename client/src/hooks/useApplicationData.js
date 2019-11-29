// import { useEffect, useReducer } from "react";
import axios from "axios";
// import "components/Application.scss";

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
    }).then(response => {
      console.log(response.data.token);
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
      localStorage.setItem("token", response.data.token);
    });
  }

  return { loginDBCall, userSignup };
}
