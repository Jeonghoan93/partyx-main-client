import { City, ICity } from "country-state-city";

const useCities = () => {
  const searchCities = (searchTerms: string[]): ICity[] => {
    if (!searchTerms.length) return [];

    // Fetch cities matching the search terms
    const cities = City.getAllCities(searchTerms);
    return cities;
  };
  return {
    searchCities,
  };
};

export default useCities;
