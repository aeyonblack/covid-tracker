import { useState, useEffect } from 'react';
import './App.css';
import { MenuItem, FormControl, Select } from '@mui/material';

const countries_url = 'https://disease.sh/v3/covid-19/countries';

function App() {
  const [countries, setCountries] = useState(['USA', 'South Africa', 'China']);

  useEffect(() => {
    const getCountries = async () => {
      await fetch(countries_url)
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => {
            return {
              name: country.country,
              value: country.countryInfo.iso2,
            };
          });
          setCountries(countries);
        });
    };
    getCountries();
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
