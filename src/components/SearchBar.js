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
            setLoading(false);
        } catch (error) {
            console.log("Error", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        console.log("useEffect fetch data worked");
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
            <div>
                <div>
                    <input className="SearchBar" onChange={handleChange} placeholder="Search" />
                </div>
                {loading && <p>Loading...</p>}
                <div>
                    {countriesSearch.length > 0 &&
                        filteredData.map((city, index) => {
                            return (
                                <div onClick={() => handleCityClick(city)} key={index}>
                                    <p>{city}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};