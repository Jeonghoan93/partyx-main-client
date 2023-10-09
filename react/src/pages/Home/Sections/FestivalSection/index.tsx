import { events } from "src/services/api-examples/events";
import FestivalSlider from "./Components/FestivalSlider";

const FestivalSection = () => {
  // change later to const festivals = getEventsByType({Festival})
  const festivals = events.slice(7, 14);
  return (
    <section className="mt-4">
      <div className="mb-4">
        <h2 className="text-[13pt] font-bold">Hottest Festivals</h2>
      </div>

      <FestivalSlider festivals={festivals} />
    </section>
  );
};

export default FestivalSection;
