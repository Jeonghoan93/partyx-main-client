import { IconType } from "react-icons";

import useCountries from "src/hooks/useCountries";
import { SafeUser } from "src/types/user";

import { Suspense, lazy } from "react";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = lazy(() => import("../Map"));

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  minGuests: number;
  maxGuests: number;
  eventTime: {
    hour: number;
    minute: number;
  };
  eventDate: string;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  location:
    | {
        flag: string;
        label: string;
        latlng: [number, number];
        region: string;
        value: string;
      }
    | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  minGuests,
  maxGuests,
  eventTime,
  eventDate,
  category,
  location,
}) => {
  const { getByValue } = useCountries();

  const coordinates = location && getByValue(location.value)?.latlng;

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
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
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
          <div>
            {eventTime?.hour} {eventTime?.minute}{" "}
          </div>
          <div>{eventDate} </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Map center={coordinates} />
      </Suspense>
    </div>
  );
};

export default ListingInfo;
