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

  function userSignup(firstName, lastName, email, password) {
    axios({
      method: "post",
      url: "/api/register",
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }
    });
  }

  function loginDBCall(email, password) {
    axios({
      method: "get",
      url: "/api/user",
      data: {
        email: email,
        password: password
      }
    });
  }

  return { loginDBCall, userSignup };
}
