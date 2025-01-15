import React from "react";
import { useEffect, useState } from "react";
import { CitiesFilter } from "../utils/CitiesFilter";

export const SearchBar = () => {
    const [countriesSearch, setCountriesSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const filterData = () => {
        setFilteredData(
            cities
                .filter((city) =>
                    city.toLowerCase().startsWith(countriesSearch.toLowerCase())
                )
                .slice(0, 5)
        );
    };
    const handleChange = (event) => {
        setCountriesSearch(event.target.value);
    };
    return (
        <div className="App">
            {loading && <p>Loading...</p>}
            <div>
                <input className="SearchBar" onChange={handleChange} placeholder="Search" />
            </div>
            <div>
                {filteredData.map((country, index) => {
                    return <div key={index}>{country} </div>;
                })}
            </div>
        </div>
    );
}