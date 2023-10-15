function onGeoOk(position) {
  const weatherArea = document.querySelector('.weather-area');
  
  const API_KEY = "91e9f3878adf25f8741778736757e512";

  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&lang=kr&units=metric`)
    .then(response => response.json())
    .then(data => {
      const region = data.name;
      const currentTemp = Math.round(data.main.temp);
      const maxTemp = Math.round(data.main.temp_max);
      const minTemp = Math.round(data.main.temp_min);
      const weather = data.weather[0].description;

      weatherArea.innerHTML = `
      <p class="weather-group">
        <span class="temperature">${currentTemp}°</span>
        <span class="region">${region}</span>
      </p>
      <p class="temperature-group">
        <span>${weather}</span>
        <span>최고: ${maxTemp}° 최저: ${minTemp}°</span>
      </p>
      `
    })
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);