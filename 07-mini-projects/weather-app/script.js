const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const API_KEY = "YOUR_API_KEY_HERE";

async function getWeather(city) {
  try {
    weatherResult.textContent = "Loading weather data...";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found. Please try again.");
    }

    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.textContent = error.message;
  }
}

// Button click
searchBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

// Enter key support
cityInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
