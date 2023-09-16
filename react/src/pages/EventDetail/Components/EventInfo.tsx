import useCountries from "src/hooks/useCountries";

import { Suspense, lazy } from "react";
import Heading from "src/components/Heading";
import { Address } from "src/interfaces/event";
import { formatDate } from "src/utils/formatDate";

const Map = lazy(() => import("src/components/Map"));

interface EventInfoProps {
  title: string;
  hostName: string;
  hostProfilePhoto: string;
  desc: string;
  minGuests: number;
  maxGuests: number;
  startDate: Date;
  endDate: Date;
  address: Address;
}

const EventInfo: React.FC<EventInfoProps> = ({
  title,
  hostName,
  hostProfilePhoto,
  desc,
  minGuests,
  maxGuests,
  startDate,
  endDate,
  address,
}) => {
  const { getCountryByValue } = useCountries();

  const location = address ? getCountryByValue(address.country) : undefined;

  const coordinates =
    address && getCountryByValue(address.country)?.coordinates;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="mb-5">
        <Heading
          title={title}
          subtitle={`${location?.value} ${location?.flag} `}
        />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <div
            className="
            flex 
            flex-col
            gap-2
          "
          >
            <span
              className="
            text-[12pt]
            font-semibold 
          "
            >
              Organized by {hostName}
            </span>
            <span className="font-light text-[11pt]">
              {minGuests} - {maxGuests} guests
            </span>

            <span className="text-[10pt]">
              {formatDate(startDate, true, endDate)}
            </span>
          </div>
        </div>
        <div className="p-2">
          <img
            className="rounded-full"
            height="40"
            width="40"
            alt="Avatar"
            src={hostProfilePhoto}
          />
        </div>
      </div>
      <hr />
      <div
        className="
      text-[12pt] font-normal text-neutral-800"
      >
        {desc}
      </div>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Map center={coordinates} />
      </Suspense>
    </div>
  );
};

export default EventInfo;
