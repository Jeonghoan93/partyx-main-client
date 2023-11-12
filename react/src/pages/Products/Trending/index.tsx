import { events } from "../../../services/api-examples/events";
import EventSlider from "./Components/EventSlider";
import NavbarTrending from "./Components/NavbarTrending";

const trendingEvents = events.slice(2, 6);

const Trending = () => {
  return (
    <>
      <NavbarTrending />
      <EventSlider events={trendingEvents} />
    </>
  );
};

export default Trending;
