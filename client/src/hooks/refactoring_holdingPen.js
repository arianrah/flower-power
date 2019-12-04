f;
function plantAddDB(name) {
  console.log(`name: ${name}, image: ${image}`);
  axios({
    method: "post",
    url: "/api/plants-new",
    plant: {
      name: name
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
