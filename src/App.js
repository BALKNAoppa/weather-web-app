import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar';
import { useEffect, useState } from 'react';
import { DaySide } from './components/DaySide';
import { NightSide } from './components/NightSide';
import { helix } from 'ldrs';
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
    helix.register();
  }, [selectedCity]);

  return (
    <div class="font-manrope">
      <div class="w-full overflow-hidden h-screen bg-gray-100 flex items-center justify-center absolute">
        <div class="w-[140px] h-[140px] absolute z-[99] flex justify-center items-center gap-4 bg-gray-100 rounded-full">
          <img class="w-[43.29px] h-[86px]" src='./img/left.png' alt='' />
          <img class="w-[43.29px] h-[86px]" src='./img/right.png' alt='' />
        </div>
        <div class="absolute flex justify-items-center top-[40px] z-[99]">
          <div class="w-[512px] h-[80px] flex items-center justify-center rounded-[48px] bg-white text-[32px] pt-[16px] pr-[24px] pb-[16px] pl-[24px]" >
            <SearchBar setSelectedCity={setSelectedCity} />
          </div>
        </div>
        <div class="basis-1/2 h-screen bg-gray-100 flex items-center justify-center">
          <img class="h-[340px] absolute z-0 right-1/2" src='./img/eclipce.png' alt='' />
          <img class="h-[540px] absolute z-0 right-1/2" src='./img/eclipce.png' alt='' />
          <img class="h-[940px] absolute z-0 right-1/2" src='./img/eclipce.png' alt='' />
          <img class="h-[1340px] absolute z-0 right-1/2" src='./img/eclipce.png' alt='' />
          <img class="h-[1740px] absolute z-0 right-1/2" src='./img/eclipce.png' alt='' />
          <div class="w-[414px] h-[828px] bg-white/75 backdrop-blur-[15px] rounded-[48px] z-[50] relative">
            {weatherLoading ? (
              <div class="flex justify-center items-center">
                <l-helix size="50" speed="2" color="black"></l-helix>
              </div>
            ) : (
              <DaySide weather={weather} weatherLoading={weatherLoading} />
            )}
          </div>
          <div class="w-[414px] h-[828px] rounded-[48px] z-0 absolute">
            <img class="w-[176px] h-[176px] absolute top-[-70px] left-[-70px]" src='./img/Group 2.png' alt='' />
          </div>
        </div>
        <div class="h-screen bg-[#0F141E] basis-1/2 flex items-center justify-center">
          <img class="h-[340px] absolute z-0 left-1/2" src='./img/Ellipse 25.png' alt='' />
          <img class="h-[540px] absolute z-0 left-1/2" src='./img/Ellipse 25.png' alt='' />
          <img class="h-[940px] absolute z-0 left-1/2" src='./img/Ellipse 25.png' alt='' />
          <img class="h-[1340px] absolute z-0 left-1/2" src='./img/Ellipse 25.png' alt='' />
          <img class="h-[1740px] absolute z-0 left-1/2" src='./img/Ellipse 25.png' alt='' />
          <div class="w-[414px] h-[828px] rounded-[48px] bg-[#111827]/75 backdrop-blur-[15px] z-[50]">
          {weatherLoading ? (
              <div class="flex justify-center items-center">
                <l-helix size="50" speed="2" color="white"></l-helix>
              </div>
            ) : (
              <NightSide weather={weather} weatherLoading={weatherLoading} />
            )}
          </div>
          <div class="w-[414px] h-[828px] rounded-[48px] z-0 absolute">
            <img class="w-[128px] h-[128px] absolute bottom-[-60px] right-[-60px]" src='./img/Ellipse 22.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;