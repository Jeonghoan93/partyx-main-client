import EventSlider from "src/pages/Home/Components/EventSlider";
import { events } from "../../../services/api-examples/events";

const FeaturedSection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Featured</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Everyone's looking into it
        </span>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default FeaturedSection;
