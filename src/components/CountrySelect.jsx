import React, { useState } from 'react';
import Select from 'react-select';
import { options, allCountriesArray } from '../utils';

export const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState({});

  const changeHandler = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const { value } = selectedCountry;

  const selectedCountryObject = allCountriesArray.filter((country) => {
    return country.isoCode === value;
  });
  console.log(selectedCountryObject);

  return (
    <Select
      options={options}
      value={selectedCountry}
      onChange={changeHandler}
    ></Select>
  );
};
