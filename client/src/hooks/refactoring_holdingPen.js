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
