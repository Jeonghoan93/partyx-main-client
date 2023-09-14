import { events } from "../api-examples/events";
import EventSlider from "./Components/EventSlider";

const TrendingSection = () => {
  return (
    <section className="mt-4 p-2">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Trending in Sweden</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Don't miss the most popular parties in Sweden
        </span>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default TrendingSection;
