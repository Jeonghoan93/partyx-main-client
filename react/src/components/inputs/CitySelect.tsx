import { ICity } from "country-state-city";
import { useState } from "react";
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
  value?: CitySelectValue;
  onChange: (value: CitySelectValue) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({ value, onChange }) => {
  const { searchCities } = useCities();

  const [options, setOptions] = useState<CitySelectValue[]>([]);

  const handleInputChange = (newValue: string) => {
    // Split by comma for multi-search
    const searchTermsArray = newValue.split(",").map((term) => term.trim());

    // Fetch cities based on input value
    const cities = searchCities(searchTermsArray);

    // Transform the cities into the format react-select expects
    const formattedCities: CitySelectValue[] = cities.map((city: ICity) => ({
      value: city.name,
      label: city.name,
      isoCode: city.stateCode,
      countryCode: city.countryCode,
      coordinates: [
        city.latitude ? parseFloat(city.latitude) : 0,
        city.longitude ? parseFloat(city.longitude) : 0,
      ],
    }));
    setOptions(formattedCities);
  };

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={options}
        onInputChange={handleInputChange}
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
