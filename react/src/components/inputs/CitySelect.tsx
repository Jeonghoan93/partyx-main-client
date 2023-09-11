import { ICity } from "country-state-city";
import { useEffect, useState } from "react";
import Select from "react-select";
import useCities from "src/hooks/useCities";

export type CitySelectValue = {
  value: string; // will store the city name
  label: string; // Will be displayed in the dropdown
  isoCode: string;
  countryCode: string;
  coordinates: number[];
};

interface CitySelectProps {
  countryCode?: string;
  value?: CitySelectValue;
  onChange: (value: CitySelectValue) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({
  countryCode,
  value,
  onChange,
}) => {
  const { searchCities } = useCities();
  const [options, setOptions] = useState<CitySelectValue[]>([]);

  useEffect(() => {
    if (countryCode) {
      const cities = searchCities(countryCode);
      if (cities) {
        const formattedCities: CitySelectValue[] = cities.map(
          (city: ICity) => ({
            value: city.name,
            label: city.name,
            isoCode: city.stateCode,
            countryCode: city.countryCode,
            coordinates: [
              city.latitude ? parseFloat(city.latitude) : 0,
              city.longitude ? parseFloat(city.longitude) : 0,
            ],
          })
        );
        setOptions(formattedCities);
      }
    }
  }, [countryCode, searchCities]);

  return (
    <div>
      <Select
        placeholder="Select a city"
        isClearable
        options={options}
        value={value}
        onChange={(selectedValue) => onChange(selectedValue as CitySelectValue)}
        formatOptionLabel={(option: CitySelectValue) => (
          <div
            className="
          flex flex-row items-center gap-3"
          >
            <div>{option.label}</div>
            <div>
              {option.isoCode},
              <span className="text-neutral-500 ml-1">
                {option.countryCode}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CitySelect;
