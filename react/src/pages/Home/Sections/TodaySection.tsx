import { useNavigate } from "react-router-dom";
import EventSlider from "src/pages/Home/Components/EventSlider";
import { formatDate } from "src/utils/formatDate";
import { events } from "../../../services/api-examples/events";

const TodaySection = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-4">
      <div className="mb-2">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[13pt] font-bold">
            {" "}
            {formatDate(new Date(), {
              full: true,
            })}
          </span>
          <span
            onClick={() => navigate("/events")}
            className="cursor-pointer text-[11pt] font-semibold"
          >
            See All
          </span>
        </div>
      </div>
      <EventSlider events={events} />
    </section>
  );
};

export default TodaySection;
