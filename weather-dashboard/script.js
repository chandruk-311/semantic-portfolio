async function getWeather() {

  const city = document.getElementById("city").value.trim();

  const apiKey = "YOUR_API_KEY";

  const url =
  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    // Error handling
    if (data.error) {

      document.getElementById("weather").innerHTML =
      `<p>City not found</p>`;

      return;
    }

    // Display weather data
    document.getElementById("weather").innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>

      <img src="https:${data.current.condition.icon}" alt="weather icon">

      <p><strong>Condition:</strong> ${data.current.condition.text}</p>

      <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>

      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>

      <p><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</p>
    `;

  } catch(error) {

    document.getElementById("weather").innerHTML =
    `<p>Something went wrong</p>`;

    console.log(error);

  }
}