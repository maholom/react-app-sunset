import { Country } from 'country-state-city';

export const allCountriesArray = Country.getAllCountries();

const isoCodeArray = allCountriesArray.map((arr) => arr.isoCode);

const countryNameArray = allCountriesArray.map((arr) => arr.name);

const selectInputArray = isoCodeArray.map(function (value, index) {
  return [value, countryNameArray[index]];
});

export const options = selectInputArray.map(([value, label]) => ({
  value,
  label,
}));
