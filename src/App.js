import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';
import { useAxios } from './hooks/useAxios.js';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [dateString, setDateString] = useState('');

  const { data, loading } = useAxios(selectedCountry, dateString);

  return (
    <div className="App">
      <div>{data.results.day_length}</div>
      <Calendar dateString={dateString} setDateString={setDateString} />
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <div>Attribution</div>
    </div>
  );
};
