export const DaySide = (props) => {
    const { weather, weatherLoading } = props;
    console.log(weather)
    const getDayWeatherIcon = (condition) => {
        const lowerCondition = condition.toLowerCase();
        if (lowerCondition.includes("clear")) {
            return "./img/icons/Day Sun.png";
        } else if (lowerCondition.includes("sunny")) {
            return "./img/icons/Day Sun.png";
        } else if (lowerCondition.includes("cloudy")) {
            return "./img/icons/Day Clouds.png";
        } else if (lowerCondition.includes("rain")) {
            return "./img/icons/Day Rain.png";
        } else if (lowerCondition.includes("snow")) {
            return "./img/icons/Day Snow.png"
        } else if (lowerCondition.includes("storm")) {
            return "./img/icons/Day Storm.png"
        } else if (lowerCondition.includes("wind")) {
            return "./img/icons/Day Wind.png"
        } else {
            return "./img/icons/Day Sun.png";
        }
    };

    if (weatherLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="DaySide">
            <div className="date">TEST{weather.date}</div>
            <div className="cityname">{weather.cityname}</div>
            <img className="weather-icon" src={getDayWeatherIcon(weather.condition)} alt=""/>
            <div className="max-temp">{weather.max_c}°C</div>
            <div className="condition">{weather.condition}</div>
        </div>
    );
};