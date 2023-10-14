import Container from "src/Components/Container";
import EmptyState from "src/Components/EmptyState";
import { Event } from "src/interfaces/event";
import EventCard from "src/pages/EventsList/Components/EventCard";
import { events } from "src/services/api-examples/events";
import { MockedUser } from "src/services/api-examples/user";

const EventsList: React.FC = () => {
  const currentUser = MockedUser;

  if (events.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3"
        }
      >
        {events.map((event: Event) => (
          <EventCard
            currentUser={currentUser}
            key={event.eventId}
            data={event}
          />
        ))}
      </div>
    </Container>
  );
};

export default EventsList;
