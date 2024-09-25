import React from 'react';

const Forecast = ({ data }) => {
  const fiveDaysForecast = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="days-forecast">
      <h2>5-Day Forecast</h2>
      <div className="weather-cards">
        {fiveDaysForecast.map((forecast) => (
          <div className="card" key={forecast.dt}>
            <h3>{forecast.dt_txt.split(" ")[0]}</h3>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather-icon" />
            <div>Temp: {forecast.main.temp}°C</div>
            <div>Wind: {forecast.wind.speed} M/S</div>
            <div>Humidity: {forecast.main.humidity}%</div>
          </div>
          
        ))}
        </div>
        </div>
  )};
  export default Forecast;
      
    