import EventSlider from "src/pages/Home/Components/EventSlider";
import { formatDate } from "src/utils/formatDate";
import { events } from "../../../services/api-examples/events";

const TodaySection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Today</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          {formatDate(new Date(), {
            full: true,
          })}
        </span>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default TodaySection;
