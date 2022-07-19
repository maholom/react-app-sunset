import React, { useState } from 'react';
import { Calendar } from './components/Calendar.jsx';
import { CountrySelect } from './components/CountrySelect';
import './index.css';
import { useAxios } from './hooks/useAxios.js';
import 'antd/dist/antd.min.css';
import { Button } from 'antd';

export const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const { data, loading, fetchData } = useAxios(selectedCountry, selectedDate);

  const { value } = selectedCountry;

  return (
    <div className="App">
      <div>React</div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <Button onClick={() => fetchData()} disabled={!selectedDate || !value}>
        Zmáčni
      </Button>
      {data ? <div>{data.results.sunset}</div> : ''}
      <div>Attribution</div>
    </div>
  );
};
