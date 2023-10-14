import { useParams } from "react-router-dom";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";

const EventPhoto = () => {
  const { eventId } = useParams<{ eventId: string }>();

  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <section className="w-full h-[40vh] overflow-hidden relative">
        <img
          src={eventData?.img}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
      </section>
    </section>
  );
};

export default EventPhoto;
