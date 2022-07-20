import React from 'react';
import Select from 'react-select';
import { options } from '../countryData';

export const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const changeHandler = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <Select
      options={options}
      value={selectedCountry}
      onChange={changeHandler}
      placeholder={'Select country'}
    ></Select>
  );
};
