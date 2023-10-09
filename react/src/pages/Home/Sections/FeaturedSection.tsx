import EventSlider from "src/pages/Home/Components/EventSlider";
import { events } from "../../../services/api-examples/events";

const FeaturedSection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Featured</h2>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default FeaturedSection;
