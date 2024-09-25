import React from 'react';

const CurrentWeather = ({ data }) => {
  const currentWeather = data.list[0];

  return (
    <div className="current-weather">
        <div className="details">
      <h2>{data.city.name} ({currentWeather.dt_txt.split(" ")[0]})</h2>
        <div>Temperature: {currentWeather.main.temp}°C</div>
        <div>Wind: {currentWeather.wind.speed} M/S</div>
        <div>Humidity: {currentWeather.main.humidity}%</div>
        </div>
        <div className="icon">
          <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`} alt="weather-icon" />
          <div>{currentWeather.weather[0].description}</div>
      </div>
      </div>

  );
};

export default CurrentWeather;
