import React from "react";
import { useEffect, useState } from "react";
import { CitiesFilter } from "../utils/CitiesFilter";


export const SearchBar = (props) => {
    const { setSelectedCity } = props;
    const [countriesSearch, setCountriesSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
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
                .slice(0, 5)
        );
    };

    const handleCityClick = (city) => {
        setSelectedCity(city.split(",")[0]);
    };
    return (
        <div>
            <div className="input-container">
                <img src="./img/search.png" class="w-12 h-12" />
                <input
                    className="search-Bar"
                    onChange={handleChange}
                    placeholder="Search"
                />
            </div>
            {loading && <p>Loading...</p>}
            <div className="founded-city-container">
                {countriesSearch.length > 0 &&
                    filteredData.map((city, index) => {
                        return (
                            <div onClick={() => handleCityClick(city)} key={index}>
                                <div className="founded-city">
                                    <img class="w-12 h-12" src="./img/Vector.png" />
                                    {city}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};