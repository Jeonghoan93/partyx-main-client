import useCurrentLocation from "src/hooks/useCurrentLocation";
import { events } from "../../../../../../services/api-examples/events";
import EventSlider from "./Components/EventSlider";
import TextBox from "../../../Components/TextBox";

const trendingEvents = events.slice(2, 6);

const Trending = () => {
  const currentLocation = useCurrentLocation();

  return (
    <>
      <TextBox
        text={
          currentLocation.city
            ? "Treading in" + currentLocation.city
            : "Your city"
        }
      />
      <EventSlider events={trendingEvents} />
    </>
  );
};

export default Trending;
