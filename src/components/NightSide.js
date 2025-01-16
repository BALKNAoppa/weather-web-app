import React from "react"; 
export const NightSide = (props) => {
    const { weather } = props;
    const getNightWeatherIcon = (condition) => {
        const icons = {
            Sunny: "./img/icons/Night Moon.png"
        };
        return icons[condition] || "./img/icons/Night Moon.png"
    };
    return (
        <div className="NightSide">
            <div className="date">{weather.date}</div>
            <div className="cityname">{weather.cityname}</div>
            <img className="weather-icon" src={getNightWeatherIcon(weather.condition)}/>
            <div className="min-temp">{weather.min_c}°C</div>
            <div className="condition">{weather.condition}</div>
        </div>
    );
};