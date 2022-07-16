import React, { useState } from 'react';
import Select from 'react-select';
import { options } from '../utils';

export const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const changeHandler = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <Select
      options={options}
      value={selectedCountry}
      onChange={changeHandler}
    ></Select>
  );
};
