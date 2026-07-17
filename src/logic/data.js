function processWeatherData(data) {
  if (!data) {
    return null;
  }

  const weather = {
    current: {
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      uvIndex: data.currentConditions.uvindex,
      humidity: data.currentConditions.humidity,
      windSpeed: data.currentConditions.windspeed,
      visibility: data.currentConditions.visibility,
    },

    forecast: data.days.slice(1, 8).map((day) => {
      return {
        date: day.datetime,
        icon: day.icon,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
      };
    }),

  };

  return weather;
}

export { processWeatherData };