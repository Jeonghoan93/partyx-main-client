import { events } from "src/services/api-examples/events";
import { formatDate } from "src/utils/formatDate";
import ItemCard from "../../../../Components/ItemCard";

const UpcomingEventsList: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {events.slice(2, 12).map((event, index) => (
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
  );
};

export default UpcomingEventsList;
