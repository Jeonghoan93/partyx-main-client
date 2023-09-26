import { Country, ICountry } from "country-state-city";

const countries = Country.getAllCountries();

const formattedCountries = countries.map((country: ICountry) => ({
  value: country.name,
  flag: country.flag,
  coordinates: [parseFloat(country.latitude), parseFloat(country.longitude)],
  isoCode: country.isoCode,
}));

const useCountries = () => {
  const getCountryByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  };

  return {
    getCountryByValue,
  };
};

export default useCountries;
