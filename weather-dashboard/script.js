async function getWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "88de35e5029b001ff1bae8c83f0f1c64";

  const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} km/h</p>
    `;

  } catch(error) {

    document.getElementById("weather").innerHTML =
    `<p>${error.message}</p>`;

  }
}