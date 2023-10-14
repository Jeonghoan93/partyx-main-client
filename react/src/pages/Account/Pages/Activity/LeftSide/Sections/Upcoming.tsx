import useUpcomingPastModal from "src/hooks/useUpcomingPastModal";
import { events } from "src/services/api-examples/events";
import { formatDate } from "src/utils/formatDate";
import ItemCard from "../Components/ItemCard";

const Upcoming = () => {
  const upcomingPastModal = useUpcomingPastModal();

  return (
    <div className="py-3 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between text-center items-center">
          <span className="font-bold text-[15pt]">Upcoming</span>
          <span
            onClick={() => upcomingPastModal.onOpen("upcoming")}
            className="cursor-pointer font-bold text-[10pt] text-gray-00"
          >
            Show all
          </span>
        </div>

        {/* <div className="flex flex-col gap-2">
          <span className="text-gray-800">You have no upcoming tickets</span>

          <div className="cursor-pointer flex flex-row items-center gap-1">
            <span className="font-semibold text-[11pt]">Find a party</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div> */}

        {events.slice(5, 8).map((event, index) => (
          <ItemCard
            key={index}
            eventId={event.eventId}
            img={event.img}
            title={event.title}
            date={formatDate(event.startDate, {
              endDate: event.endDate,
            })}
            street={event.address.street}
            city={event.address.city}
          />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
