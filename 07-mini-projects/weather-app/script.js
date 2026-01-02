const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const API_KEY = "ae8544d56e9ccccef43eb9dcde451614";

async function getWeather(city) {
  try {
    weatherResult.textContent = "Loading...";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.textContent = error.message;
  }
}

searchBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();

  if (city !== "") {
    getWeather(city);
  }
});
