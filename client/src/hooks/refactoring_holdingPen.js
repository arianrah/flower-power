f
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
