import React from "react"; 
export const DaySide = (props) => {
    const { weather } = props;
    const getDayWeatherIcon = (condition) => {
        const icons = {
            Sunny: "./img/icons/Day Sun.png"
        };
        return icons[condition] || "./img/icons/Day Sun.png"
    };
    return (
        <div className="DaySide">
            <div className="date">{weather.date}</div>
            <div className="cityname">{weather.cityname}</div>
            <img className="weather-icon" src={getDayWeatherIcon(weather.condition)}/>
            <div className="max-temp">{weather.max_c}°C</div>
            <div className="condition">{weather.condition}</div>
        </div>
    );
};