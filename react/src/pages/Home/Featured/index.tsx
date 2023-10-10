import Container from "src/components/Container";

import { events } from "src/services/api-examples/events";
import EventSlider from "./Components/EventSlider";

const Featured = () => {
  return (
    <Container>
      <section className="mt-4">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Featured</h2>
        </div>
        <EventSlider events={events} />
      </section>
    </Container>
  );
};

export default Featured;
