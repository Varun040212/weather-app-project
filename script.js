const apiKey = "1feacc41cbbb0e5c6c56825bdfbe827a"; // Replace with your actual API key from OpenWeatherMap

// Function to fetch weather data
function getWeather() {
  const city = document.getElementById("cityInput").value; // Get city name from input field
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
    });
}