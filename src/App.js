import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';
import { useAxios } from './hooks/useAxios.js';
import 'antd/dist/antd.min.css';
import { Button } from 'antd';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [dateString, setDateString] = useState('');

  const { data, loading, fetchData } = useAxios(selectedCountry, dateString);

  const { value } = selectedCountry;

  return (
    <div className="App">
      <Calendar dateString={dateString} setDateString={setDateString} />
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <Button onClick={() => fetchData()} disabled={!dateString || !value}>
        Zmáčni
      </Button>
      {data ? <div>{data.results.sunset}</div> : ''}
      <div>Attribution</div>
    </div>
  );
};
