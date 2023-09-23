import EmptyState from "src/components/EmptyState";

import { useParams } from "react-router-dom";
import ClientOnly from "src/components/ClientOnly";
import { Event } from "src/interfaces/event";
import { getMockedBookings } from "src/services/api-examples/booking";
import { events } from "src/services/api-examples/events";
import { MockedUser } from "src/services/api-examples/user";
import EventClient from "./Components/EventClient";
import NavbarSection from "./Components/NavbarSection";

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
      <ClientOnly>
        <NavbarSection eventId={Number(eventId)} currentUser={currentUser} />
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <NavbarSection eventId={Number(eventId)} currentUser={currentUser} />
      <EventClient
        event={eventData}
        bookings={bookings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default EventDetail;