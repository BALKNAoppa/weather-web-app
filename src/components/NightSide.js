export const NightSide = (props) => {
    const { weather, weatherLoading } = props;
    const getNightWeatherIcon = (condition) => {
        const lowerCondition = condition.toLowerCase();
        if (lowerCondition.includes("clear")) {
            return "./img/icons/Night Moon.png";
        } else if (lowerCondition.includes("sunny")) {
            return "./img/icons/Night Moon.png";
        } else if (lowerCondition.includes("cloudy")) {
            return "./img/icons/Night Clouds.png";
        } else if (lowerCondition.includes("rain")) {
            return "./img/icons/Night Rain.png";
        } else if (lowerCondition.includes("snow")) {
            return "./img/icons/Snow.png"
        } else if (lowerCondition.includes("storm")) {
            return "./img/icons/ Snow (1).png"
        } else if (lowerCondition.includes("wind")) {
            return "./img/icons/Wind.png"
        } else {
            return "./img/icons/Night Moon.png";
        }
    };

    if (weatherLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="NightSide">
            <div className="date">{weather.date}</div>
            <div className="cityname">{weather.cityname}</div>
            <img className="weather-icon" src={getNightWeatherIcon(weather.condition)} alt="" />
            <div className="min-temp">{weather.min_c}°C</div>
            <div className="condition">{weather.condition}</div>
        </div>
    );
};