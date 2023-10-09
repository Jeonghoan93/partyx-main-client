import { events } from "../../../services/api-examples/events";
import EventSlider from "../Components/EventSlider";

const newestEvents = events.slice(3, 7);

const NewestSection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Newest in Sweden</h2>
      </div>
      <EventSlider events={newestEvents} />
    </section>
  );
};

export default NewestSection;
