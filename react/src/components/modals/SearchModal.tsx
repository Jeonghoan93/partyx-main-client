import { formatISO } from "date-fns";
import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchModal from "src/hooks/useSearchModal";

import Heading from "../Heading";
import CitySelect, { CitySelectValue } from "../inputs/CitySelect";
import Counter from "../inputs/Counter";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import DateRangePicker from "../inputs/DateRangePicker";
import Modal from "./Modal";
// Direct import for debugging purposes
import Map from "../Map";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

interface QueryParams {
  [key: string]: string | number | undefined;
  countryValue?: string;
  cityValue?: string;
  guestCount?: number;
  startDate?: string;
  endDate?: string;
}

const SearchModal = () => {
  const navigate = useNavigate();
  const searchModal = useSearchModal();
  const locationUse = useLocation();

  const [step, setStep] = useState(STEPS.LOCATION);
  const [country, setCountry] = useState<CountrySelectValue | undefined>();
  const [city, setCity] = useState<CitySelectValue | undefined>();
  const [guestCount, setGuestCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const onSubmit = useCallback(() => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    const currentQuery = qs.parse(locationUse.search);

    const updatedQuery: QueryParams = {
      ...currentQuery,
      countryValue: country?.value,
      cityValue: city?.value,
      guestCount,
      startDate: dateRange.startDate && formatISO(dateRange.startDate),
      endDate: dateRange.endDate && formatISO(dateRange.endDate),
    };

    const url = qs.stringifyUrl(
      {
        url: "/events",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    navigate(url);
  }, [step, country, city, guestCount, dateRange, locationUse.search]);

  const actionLabel = useMemo(
    () => (step === STEPS.INFO ? "Search" : "Next"),
    [step]
  );

  const secondaryActionLabel = useMemo(
    () => (step !== STEPS.LOCATION ? "Back" : undefined),
    [step]
  );

  let bodyContent;

  switch (step) {
    case STEPS.DATE:
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="When do you plan to go?"
            subtitle="Make sure everyone is free!"
          />
          <DateRangePicker
            onChange={(value) => setDateRange(value.selection)}
            value={dateRange}
          />
        </div>
      );
      break;
    case STEPS.INFO:
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading title="More information" subtitle="more types..!" />
          <Counter
            onChange={setGuestCount}
            value={guestCount}
            title="Guests"
            subtitle="How many guests are coming?"
          />
        </div>
      );
      break;
    case STEPS.LOCATION:
    default:
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Where do you wanna go?"
            subtitle="Find the perfect place!"
          />
          <CountrySelect
            value={country}
            onChange={(value) => setCountry(value as CountrySelectValue)}
          />
          {country?.isoCode && (
            <CitySelect
              countryCode={country?.isoCode}
              value={city}
              onChange={(value) => setCity(value as CitySelectValue)}
            />
          )}
          {city && <Map center={city?.coordinates} key={country?.isoCode} />}
        </div>
      );
      break;
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step !== STEPS.LOCATION ? onBack : undefined}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
};

export default SearchModal;
