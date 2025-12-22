async function getWeather(city) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=VTYBT8SMG2NYNBFWKVS6R953L&contentType=json`
  );
  let weatherData = await response.json();
  createWeatherCard(weatherData);
}

const container = document.querySelector(".container");
const searchBox = document.querySelector("#search");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchBox.value;
  getWeather(city);
});

function createWeatherCard(weatherData) {
  if (document.querySelector(".weather-card")) {
    document.querySelector(".weather-card").remove();
  }

  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");

  console.log(weatherData);
  const cityTitle = document.createElement("h4");
  const cityOnly = weatherData.resolvedAddress.split(",")[0];
  cityTitle.textContent = cityOnly;
  weatherCard.appendChild(cityTitle);

  const weatherTemp = document.createElement("h1");
  weatherTemp.textContent = `${weatherData.currentConditions.temp}°C`;
  weatherCard.appendChild(weatherTemp);

  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = `${weatherData.currentConditions.conditions}`;
  weatherCard.appendChild(weatherDescription);

  container.appendChild(weatherCard);
}

navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getWeatherByCoordinates(latitude, longitude);
});

async function getWeatherByCoordinates(latitude, longitude) {
  getWeather(`${latitude},${longitude}`);
}
