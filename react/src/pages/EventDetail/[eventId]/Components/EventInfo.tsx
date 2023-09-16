import useCountries from "src/hooks/useCountries";

import { Suspense, lazy } from "react";
import Avatar from "src/components/Avatar";
import { Address } from "src/interfaces/event";
import { formatDate } from "src/utils/formatDate";

const Map = lazy(() => import("src/components/Map"));

interface EventInfoProps {
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

  const coordinates =
    address && getCountryByValue(address.country)?.coordinates;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
            
          "
        >
          <div>Hosted by {hostName}</div>
          <Avatar src={hostProfilePhoto} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {minGuests} - {maxGuests} guests
          </div>
          <div>{formatDate(startDate, true, endDate)}</div>
        </div>
      </div>
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
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
