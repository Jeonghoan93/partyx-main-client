import EmptyState from "src/Components/EmptyState";

import { useParams } from "react-router-dom";
import { Event } from "src/interfaces/event";
import { getMockedBookings } from "src/services/api-examples/booking";
import { events } from "src/services/api-examples/events";
import { MockedUser } from "src/services/api-examples/user";
import EventClient from "./Components/EventClient";

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  if (!eventId) {
    return (
      <EmptyState title="Event Not Found" subtitle="Event id doesn't exist" />
    );
  }
  // const event = getEventById(params.eventId);
  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );
  // const bookings = getBookingsById()
  const bookings = getMockedBookings(Number(eventId));
  // const currenUser = getCurrentUser;
  const currentUser = MockedUser;

  if (!eventData) {
    return (
      <>
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <EventClient
        event={eventData}
        bookings={bookings}
        currentUser={currentUser}
      />
    </>
  );
};

export default EventDetail;
