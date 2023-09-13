import Container from "src/components/Container";
import { events } from "../api-examples/events";
import EventSlider from "./Components/EventSlider";

const FeaturedCard = () => {
  return (
    <Container>
      <section className="mt-4 p-1">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Featured parties near you</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Everyone's looking into it
          </span>
        </div>
        <EventSlider events={events} />
      </section>
    </Container>
  );
};

export default FeaturedCard;
