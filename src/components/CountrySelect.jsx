import React from 'react';
import { Select } from 'antd';
import { options } from '../countryData';

export const CountrySelect = ({ selectedCountry, setSelectedCountry }) => {
  const changeHandler = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  return (
    <Select
      style={{ width: '100%' }}
      options={options}
      value={selectedCountry || undefined}
      onChange={changeHandler}
      placeholder="Select a country"
      size={'large'}
    ></Select>
  );
};
