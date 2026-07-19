function renderWeatherData(data) {
  if (!data) return;

  const title = document.querySelector(".title");
  const conditions = document.querySelector(".condition-details");
  const additional = document.querySelector(".additional");

  //   Clear content---------------------------------------------
  title.innerHTML = "";
  conditions.innerHTML = "";
  additional.innerHTML = "";

  // Title------------------------------------------
  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = data.location;

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = data.date;

  const time = document.createElement("p");
  time.classList.add("time");
  time.textContent = data.time;

  title.appendChild(location);
  title.appendChild(date);
  title.appendChild(time);

  // Conditions------------------------------------------
  const temp = document.createElement("h3");
  temp.classList.add("temp");
  temp.textContent = data.current.temp;

  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = data.current.condition;

  conditions.appendChild(temp);
  conditions.appendChild(condition);

  // Additional----------------------------------------------
  const uvIndex = document.createElement("p");
  uvIndex.classList.add("uv-index");
  uvIndex.textContent = data.current.uvIndex;

  const humidity = document.createElement("p");
  humidity.classList.add("humidity");
  humidity.textContent = data.current.humidity;

  const windSpeed = document.createElement("p");
  windSpeed.classList.add("wind-speed");
  windSpeed.textContent = data.current.windSpeed;

  const visibility = document.createElement("p");
  visibility.classList.add("visibility");
  visibility.textContent = data.current.visibility;

  additional.appendChild(uvIndex);
  additional.appendChild(humidity);
  additional.appendChild(windSpeed);
  additional.appendChild(visibility);

  // Forecast--------------------------------------------------
  const forecastList = document.querySelector(".forecast-list");

  //   Clear content---------------------------------------------
  forecastList.innerHTML = "";

  //   Forecast content----------------------------------------------
  data.forecast.forEach((day) => {
    const dayCard = document.createElement("div");
    dayCard.classList.add("day-card");

    const forecastDate = document.createElement("p");
    forecastDate.classList.add("forecast-date");
    forecastDate.textContent = day.date;

    const forecastCondition = document.createElement("p");
    forecastCondition.classList.add("forecast-condition");
    forecastCondition.textContent = day.condition;

    const forecastTempMax = document.createElement("p");
    forecastTempMax.classList.add("forecast-temp-max");
    forecastTempMax.textContent = day.tempMax;

    const forecastTempMin = document.createElement("p");
    forecastTempMin.classList.add("forecast-temp-min");
    forecastTempMin.textContent = day.tempMin;

    forecastList.appendChild(dayCard);
    dayCard.appendChild(forecastDate);
    dayCard.appendChild(forecastCondition);
    dayCard.appendChild(forecastTempMax);
    dayCard.appendChild(forecastTempMin);
  });
}

export { renderWeatherData };
