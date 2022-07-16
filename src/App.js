import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import { allCountriesArray } from './data.js';
import './index.css';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [dateString, setDateString] = useState('');

  const { value } = selectedCountry;

  const selectedCountryObj = allCountriesArray.filter((country) => {
    return country.isoCode === value;
  });

  return (
    <div className="App">
      <Calendar dateString={dateString} setDateString={setDateString} />
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
};
