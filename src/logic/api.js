async function fetchApi(location) {
  try {
    const ApiKey = "CET5AHATQ85KVRL2C4RMVD7WM";

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current,days&key=${ApiKey}&contentType=json`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export { fetchApi };
