import { useParams } from "react-router-dom";
import LineContainer from "src/components/LineContainer";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";
import { formatDate } from "src/utils/formatDate";

const DateLocation = () => {
  const { eventId } = useParams<{ eventId: string }>();

  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">Date & Location</span>

        <div className="flex flex-col items-start gap-1">
          <span className="font-semibold text-[11pt] text-gray-700">
            {formatDate(eventData?.startDate || new Date(), {
              timeIncluded: true,
              endDate: eventData?.endDate,
            })}
          </span>
          <div className="flex flex-col items-start">
            <span className="font-semibold text-[11pt] text-gray-700">
              {eventData?.address.street}
            </span>
            <span className="font-semibold text-[11pt] text-gray-700">
              {eventData?.address.city}
            </span>
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default DateLocation;
