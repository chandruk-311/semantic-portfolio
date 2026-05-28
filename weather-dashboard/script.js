async function getWeather() {

  const city =
  document.getElementById("city").value.trim();

  const apiKey =
  "5c3f279ac2d1411bbc3151653262805";

  const url =
  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const weatherDiv =
  document.getElementById("weather");

  weatherDiv.innerHTML =
  "Loading...";

  try {

    const response =
    await fetch(url);

    const data =
    await response.json();

    if(data.error){

      weatherDiv.innerHTML =
      "City not found";

      return;
    }

    weatherDiv.innerHTML = `

      <h2>
      ${data.location.name},
      ${data.location.country}
      </h2>

      <img
      src="https:${data.current.condition.icon}">

      <p>
      Condition:
      ${data.current.condition.text}
      </p>

      <p>
      Temperature:
      ${data.current.temp_c} °C
      </p>

      <p>
      Humidity:
      ${data.current.humidity}%
      </p>

      <p>
      Wind Speed:
      ${data.current.wind_kph} km/h
      </p>
    `;

  } catch(error){

    weatherDiv.innerHTML =
    "Something went wrong";
  }
}