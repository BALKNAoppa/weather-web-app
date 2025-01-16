import React from "react"; 
export const NightSide = (props) => {
    const { weather } = props;
    
    return (
        <div className="NightSide">
            RightSide
            <div>{weather.min_c}°C</div>
            <div>{weather.date}</div>
            <div>{weather.condition}</div>
        </div>
    );
};