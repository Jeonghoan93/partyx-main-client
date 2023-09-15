import useCountries from "src/hooks/useCountries";
import { SafeUser } from "src/interfaces/user";

import { Address } from "src/interfaces/event";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface EventHeadProps {
  title: string;
  img: string;
  eventId: number;
  currentUser?: SafeUser | null;
  address: Address | undefined;
}

const EventHead: React.FC<EventHeadProps> = ({
  title,
  address,
  img,
  eventId,
  currentUser,
}) => {
  const { getCountryByValue } = useCountries();

  const location = address ? getCountryByValue(address.country) : undefined;

  return (
    <>
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton eventId={eventId} currentUser={currentUser} />
        </div>
      </div>
      <Heading
        title={title}
        subtitle={`${location?.flag}, ${location?.value}`}
      />
    </>
  );
};

export default EventHead;
