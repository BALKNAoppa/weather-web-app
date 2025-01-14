import './App.css';
import { useEffect, useState } from 'react';
import { CitiesFilter } from './utils/CitiesFilter';

function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    await fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const countriesAndCity = CitiesFilter(result);
        setCities(countriesAndCity);
        setFilteredData(countriesAndCity);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const filterData = () => {
    setFilteredData(
      cities
        .filter((city) =>
          city.toLowerCase().startsWith(countriesSearch.toLowerCase())
        )
        .slice(0, 5)
    );
  };

  useEffect(() => {
    filterData();
  }, [countriesSearch]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleChange = (event) => {
    setCountriesSearch(event.target.value);
  };
  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      <div>
        <input onChange={handleChange} placeholder='Search'/>
      </div>
      <div>
        {
          filteredData.map((country, index) => {
            return <div key={index}>{country}</div>;
          })}
      </div>
    </div>
  );
};
export default App;

