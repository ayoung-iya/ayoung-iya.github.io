function onGeoOk(position) {
  const API_KEY = "91e9f3878adf25f8741778736757e512";

  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
}

function onGeoError() {
  // alert("위치를 찾을 수 없습니다.")
  console.log("fail");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);