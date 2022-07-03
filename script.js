let API_keys = "3869021086b53413c374a899138b0dfa";

let inputValue;

// function to get form input value
function formValidation() {
  const formE = document.querySelector("form");
  formE.addEventListener("submit", (event) => {
    event.preventDefault();
    inputValue = document.querySelector("input").value;
    console.log(inputValue);
    parseAPIdata(inputValue).then((object) => displayData(object));
  });
}

// async function to fetch API
async function getAPI(location) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_keys}&units=metric`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// function who convert celsius into fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return Math.round((fahrenheit + Number.EPSILON) * 100) / 100;
}

// function to parse API data
async function parseAPIdata(location) {
  const JsonData = await getAPI(location);

  function dataConstructor(json) {
    this.weather = json.weather[0].description;
    this.temperature = json.main.temp;
    this.wind = json.wind.speed;
  }

  const parseData = new dataConstructor(JsonData);
  return parseData;
}

// Function to display weather data
function displayData(object) {
  const contentE = document.querySelector(".content");
  deleteCurrentElement(contentE);
  const weatherE = document.createElement("div");
  contentE.appendChild(weatherE).textContent = object.weather;

  const tempE = document.createElement("div");
  contentE.appendChild(tempE).textContent = `${roundValue(
    object.temperature
  )} C°`;

  const windE = document.createElement("div");
  contentE.appendChild(windE).textContent = object.wind;
}

// Function to round value
function roundValue(value) {
  return Math.floor(value);
}

// Function to delete all the child element
function deleteCurrentElement(element) {
  let first = element.firstElementChild;
  while (first) {
    first.remove();
    first = element.firstElementChild;
  }
}

formValidation();
