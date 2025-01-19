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
                <img src="./img/Vector.png" class="w-12 h-12" />
                <input
                    class="bg-blue-200 focus:bg-blue-300 text-gray-700 p-2 rounded"
                    onChange={handleChange}
                    placeholder="Search"
                />
            </div>
            <div className="founded-city-container">
                {countriesSearch.length > 0 &&
                    filteredData.map((city, index) => {
                        return (
                            <div onClick={() => handleCityClick(city)} key={index}>
                                <div className="founded-city">
                                    <img class="w-12 h-12" src="./img/location.png" />
                                    {city}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};