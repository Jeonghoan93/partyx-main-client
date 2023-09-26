import EventSlider from "src/pages/Home/Components/EventSlider";
import { events } from "../../../services/api-examples/events";

const NearSection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Near you</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Just around the corner
        </span>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default NearSection;
