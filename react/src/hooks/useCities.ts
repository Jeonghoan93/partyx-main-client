import { City, ICity } from "country-state-city";
import { useCallback } from "react";

const useCities = () => {
  const searchCities = useCallback(
    (countryCode: string): ICity[] | undefined => {
      if (!countryCode.length) return [];

      // Fetch cities matching the search terms
      const cities = City.getCitiesOfCountry(countryCode);
      return cities;
    },
    []
  );

  return {
    searchCities,
  };
};

export default useCities;
