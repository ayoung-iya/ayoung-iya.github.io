function onGeoOk(position) {
  // const lat = position.coords.latitude;
  // const long = position.coords.longitude;

  // console.log(lat);
  // console.log(long);
  console.log(position)
}

function onGeoError() {
  // alert("위치를 찾을 수 없습니다.")
  console.log("fail");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);