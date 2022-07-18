import { useState, useEffect } from 'react';
import axios from 'axios';
import { allCountriesArray } from '../data';

export const useAxios = (selectedCountry, dateString) => {
  const { value } = selectedCountry;

  const selectedCountryData = allCountriesArray.filter((country) => {
    return country.isoCode === value;
  });
  const latitude = selectedCountryData.map((obj) => obj.latitude).toString();
  const longitude = selectedCountryData.map((obj) => obj.longitude).toString();

  const baseURL = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${dateString}`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (err) {
      console.log('There is an error occured.', err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};
