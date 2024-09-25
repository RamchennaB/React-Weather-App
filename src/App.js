import React, { useState } from 'react';
import './App.css'; 
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const API_KEY = "4e0ad34c9cc219949b023b0c94543fc4";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherByCity = async () => {
    if (!city.trim()) {
      alert('please enter a city name');
      return;
    }

    try {
      setError('');
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      if (res.ok) {
        const data = await res.json();
        setWeatherData(data);
      } else {
        setError('City not found. Please check the spelling or try another city.');
      }
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  const fetchWeatherByLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const data = await res.json();
        setWeatherData(data);
        setError('');
      } catch (error) {
        setError('Error fetching weather data. Please try again.');
      }
    });
  };

  return (
    <>
    <h1>Weather Dashboard</h1>
    <div className="container" >
      <div className="weather-input">
        <h3>Enter a City Name</h3>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherByCity}>Search</button>
        <div className="separator"></div>
        <button onClick={fetchWeatherByLocation} className="location-btn">Use Current Location</button>
      </div>
      <div className="weather-data">
        {error && <div className="error">{error}</div>}
        {weatherData && (
          <>
            <CurrentWeather data={weatherData} />
            <Forecast data={weatherData} />
          </>
        )}
      </div>
    </div>
  </>
  );
}
export default App;
