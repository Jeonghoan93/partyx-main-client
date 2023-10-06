import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";
import EventCard from "src/components/events/EventCard";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";
import { MockedUser } from "src/services/api-examples/user";

const EventList: React.FC = () => {
  const currentUser = MockedUser;
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  if (events.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className={
          isMobile
            ? `pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3`
            : `pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3`
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

export default EventList;
