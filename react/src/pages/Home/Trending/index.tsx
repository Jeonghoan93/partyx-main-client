import Container from "src/components/Container";
import useCurrentLocation from "src/hooks/useCurrentLocation";
import { events } from "../../../services/api-examples/events";
import EventSlider from "./Components/EventSlider";

const trendingEvents = events.slice(2, 6);

const Trending = () => {
  const currentLocation = useCurrentLocation();

  return (
    <Container>
      <section className="mt-4">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">
            Trending in {currentLocation.city || "your city"}
          </h2>
        </div>
        <EventSlider events={trendingEvents} />
      </section>
    </Container>
  );
};

export default Trending;
