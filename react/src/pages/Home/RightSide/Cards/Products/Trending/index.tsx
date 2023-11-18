import useCurrentLocation from "src/hooks/useCurrentLocation";
import { events } from "../../../../../../services/api-examples/events";
import TextBox from "../../../Components/TextBox";
import EventSlider from "./Components/EventSlider";

const trendingEvents = events.slice(2, 6);

const Trending = () => {
  const currentLocation = useCurrentLocation();

  return (
    <>
      <TextBox
        text={
          currentLocation.city
            ? "Trending in " + currentLocation.city
            : "Your city"
        }
      />
      <EventSlider events={trendingEvents} />
    </>
  );
};

export default Trending;
