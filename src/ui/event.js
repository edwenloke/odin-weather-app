import { fetchApi } from "../logic/api.js";
import { processWeatherData } from "../logic/data.js";
import { renderWeatherData } from "../ui/dom.js";

function searchLocationEvent() {
  const form = document.querySelector(".location-form");
  const input = document.querySelector("#location-search");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const location = input.value.trim();

    if (!location) return;

    const data = await fetchApi(location);

    const renderData = processWeatherData(data);

    renderWeatherData(renderData);
  });
}

async function loadWeather(location = "London") {
  const data = await fetchApi(location);

  const renderData = processWeatherData(data);

  renderWeatherData(renderData);
}

export { searchLocationEvent, loadWeather };
