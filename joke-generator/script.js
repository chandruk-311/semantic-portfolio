async function getJoke() {

  const jokeDiv = document.getElementById("joke");

  jokeDiv.innerHTML = "Loading joke...";

  const url =
  "https://official-joke-api.appspot.com/random_joke";

  try {

    const response = await fetch(url);

    const data = await response.json();

    jokeDiv.innerHTML = `
      <p><strong>${data.setup}</strong></p>
      <p>${data.punchline}</p>
    `;

  } catch(error) {

    jokeDiv.innerHTML =
    "Failed to load joke";

    console.log(error);

  }
}
