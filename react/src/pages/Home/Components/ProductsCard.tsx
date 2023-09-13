import Container from "src/components/Container";
import EventSlider from "./EventSlider";
import Events from "./Events";
import { events } from "./api-examples/events";

const ProductsCard = () => {
  return (
    <Container>
      <section className="mt-4 p-1">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Trending in Sweden</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Don't miss the most popular parties in Sweden
          </span>
        </div>
        <EventSlider events={events} />
      </section>
      <section className="mt-4 p-1">
        <div className="mb-2">
          <h2 className="text-[13pt] font-bold">Newest in Sweden</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Explore the newest parties in Sweden
          </span>
        </div>
        <Events />
      </section>
    </Container>
  );
};

export default ProductsCard;
