import useCountries from "src/hooks/useCountries";
import { SafeUser } from "src/interfaces/user";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import { CountrySelectValue } from "../inputs/CountrySelect";

interface EventHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
  locationValue: CountrySelectValue | undefined;
}

const EventHead: React.FC<EventHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getCountryByValue } = useCountries();

  const location = locationValue
    ? getCountryByValue(locationValue.value)
    : undefined;

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.flag}, ${location?.value}`}
      />
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
          src={imageSrc}
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
          <HeartButton eventId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default EventHead;
