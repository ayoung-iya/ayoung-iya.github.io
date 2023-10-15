function onGeoOk(position) {
  // const lat = position.coords.latitude;
  // const long = position.coords.longitude;

  // console.log(lat);
  // console.log(long);
  console.log(position)
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);