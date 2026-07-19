function processWeatherData(data) {
  if (!data) {
    return null;
  }

  const weather = {
    location: data.resolvedAddress,
    date: data.days[0].datetime,
    time: data.currentConditions.datetime,

    current: {
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
      condition: data.currentConditions.conditions,
      uvIndex: data.currentConditions.uvindex,
      humidity: data.currentConditions.humidity,
      windSpeed: data.currentConditions.windspeed,
      visibility: data.currentConditions.visibility,
    },

    forecast: data.days.slice(1, 8).map((day) => {
      return {
        date: day.datetime,
        icon: day.icon,
        condition: day.conditions,
        tempMax: day.tempmax,
        tempMin: day.tempmin,
      };
    }),
  };

  return weather;
}

export { processWeatherData };
