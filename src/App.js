import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState(["Ulaanbaatar"]);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const gerWeather = async () => {
    setWeatherLoading(true);
    const weatherApiKey = "7def0ab086d841c5a3521924251501"

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );
      const data = await response.json();
      setWeather(data);
      setWeatherLoading(false);
    } catch (error) {
      console.log("Error", error);
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    gerWeather();
  }, [selectedCity]);

  return (
    <div className="App">
      <SearchBar />
      {weatherLoading && <p>Loading...</p>}
      <div>
        {weather.map((city, index) => {
          return <div key={index}>{city} </div>;
        })}
      </div>
    </div>
  );
};
export default App;