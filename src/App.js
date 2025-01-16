import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
const weatherApiKey = "7def0ab086d841c5a3521924251501"

function App() {
  const [selectedCity, setSelectedCity] = useState(["Ulaanbaatar"]);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    setWeatherLoading(true);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );

      const result = await response.json();
      const weatherData = {
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
      }
      setWeather(weatherData);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setWeatherLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="App">
      <SearchBar setSelectedCity={setSelectedCity} />
      {weatherLoading && <p>Loading...</p>}
    </div>
  );
};

export default App;