import qs from "query-string";
import { Suspense, lazy, useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchModal from "src/hooks/useSearchModal";

import Heading from "../Heading";
import CitySelect, { CitySelectValue } from "../inputs/CitySelect";
import Counter from "../inputs/Counter";
import CountrySelect, { CountrySelectValue } from "../inputs/CountrySelect";
import Modal from "./Modal";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const navigate = useNavigate();
  const searchModal = useSearchModal();

  const locationUse = useLocation();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [country, setCountry] = useState<CountrySelectValue>();
  const [city, setCity] = useState<CitySelectValue>();

  const [guestCount, setGuestCount] = useState(1);

  // const [dateRange, setDateRange] = useState<Range>({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // });

  const Map = lazy(() => import("../Map"));

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    const params = new URLSearchParams(locationUse.search);

    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      countryValue: country?.value,
      cityValue: city?.value,
      guestCount,
    };

    // if (dateRange.startDate) {
    //   updatedQuery.startDate = formatISO(dateRange.startDate);
    // }

    // if (dateRange.endDate) {
    //   updatedQuery.endDate = formatISO(dateRange.endDate);
    // }

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
  }, [
    step,
    searchModal,
    country,
    city,
    navigate,
    guestCount,
    onNext,
    locationUse.search,
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Search";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
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

      <hr />
      {city && (
        <Suspense fallback={<div>Loading...</div>}>
          <Map center={city?.coordinates} key={country?.isoCode} />
        </Suspense>
      )}
    </div>
  );

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        Date Picker deleted
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="more types..!" />
        <Counter
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests are coming?"
        />
        <hr />
      </div>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
};

export default SearchModal;
