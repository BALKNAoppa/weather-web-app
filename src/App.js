import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
import { DaySide } from './components/DaySide';
import { NightSide } from './components/NightSide';
const weatherApiKey = "7def0ab086d841c5a3521924251501"

function App() {
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weather, setWeather] = useState({});

  const getWeather = async () => {

    try {

      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`,
        { method: "get", headers: { "Content-Type": "application/json" } }
      );

      const result = await response.json();
      console.log("Result", result);

      const weatherData = {
        max_c: result.forecast.forecastday[0].day.maxtemp_c,
        min_c: result.forecast.forecastday[0].day.mintemp_c,
        condition: result.forecast.forecastday[0].day.condition.text,
        date: result.forecast.forecastday[0].date,
        cityname: result.location.name,
      }
      setWeather(weatherData);
      setWeatherLoading(false);

    } catch (error) {
      console.log("Error", error);
      setWeatherLoading(false);
    }
  }

  useEffect(() => {
    getWeather();
  }, [selectedCity]);

  return (
    <div className="App">
      <div class="w-full h-screen bg-gray-100 flex items-center justify-center absolute">
        <div className='pinecone-logo-container'>
          <img className='logo-left' src='./img/left.png' />
          <img className='logo-right' src='./img/right.png' />
        </div>
        <div className='search-container'>
          <div className='search-bar-container'>
            <SearchBar setSelectedCity={setSelectedCity} />
          </div>
        </div>
        <div className='left'>
          <img className='vecto' src='./img/eclipce.png' />
          <img className='vecto1' src='./img/eclipce.png' />
          <img className='vecto2' src='./img/eclipce.png' />
          <img className='vecto3' src='./img/eclipce.png' />
          <img className='vecto4' src='./img/eclipce.png' />
          <div className='day-side'>
            <DaySide weather={weather} weatherLoading={weatherLoading}/>
          </div>
          <div className='sun-container'>
          <img className='sun' src='./img/Group 2.png' />
          </div>
        </div>
        <div className='right'>
          <img className='vector' src='./img/Ellipse 25.png' />
          <img className='vector1' src='./img/Ellipse 25.png' />
          <img className='vector2' src='./img/Ellipse 25.png' />
          <img className='vector3' src='./img/Ellipse 25.png' />
          <img className='vector4' src='./img/Ellipse 25.png' />
          <div className='night-side'>
            <NightSide weather={weather} weatherLoading={weatherLoading} />
          </div>
          <div className='moon-container'>
          <img className='moon' src='./img/Ellipse 22.png' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;