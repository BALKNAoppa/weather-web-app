import React from "react"; 
export const DaySide = (props) => {
    const { weather } = props;
    
    return (
        <div className="DaySide">
            LeftSide
            <div>{weather.max_c}°C</div>
            <div>{weather.date}</div>
            <div>{weather.condition}</div>
        </div>
    );
};