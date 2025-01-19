import React from "react";
import { useEffect, useState } from "react";
import { CitiesFilter } from "../utils/CitiesFilter";

export const SearchBar = (props) => {
    const { setSelectedCity } = props;
    const [countriesSearch, setCountriesSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [cities, setCities] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://countriesnow.space/api/v0.1/countries");
            const data = await response.json();
            const citiesFilter = CitiesFilter(data.data);
            setCities(citiesFilter);
            setFilteredData(citiesFilter);
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleChange = (event) => {
        setCountriesSearch(event.target.value);
        setFilteredData(
            cities
                .filter((city) =>
                    city.toLowerCase().startsWith(event.target.value.toLowerCase())
                )
                .slice(0, 3)
        );
    };

    const handleCityClick = (city) => {
        setSelectedCity(city.split(",")[0]);
    };
    return (
        <div>
            <div className="input-container">
                <img src="./img/Vector.png" class="w-[34.98px] h-[34.98px] opacity-20 " />
                <input
                    class=" p-2 rounded w-[450px] h-[44px] font-bold border-none focus:outline-none focus:ring-0 placeholder-opacity-[20%]"
                    onChange={handleChange}
                    placeholder="Search"
                />
            </div>
            <div class= "absolute">
                {countriesSearch.length > 0 &&
                    filteredData.map((city, index) => {
                        return (
                            <div className="founded-city" onClick={() => handleCityClick(city)} key={index}>
                                    <img class="w-[23.33px] h-[33.33px] opacity-20" src="./img/location.png" />
                                    {city}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};