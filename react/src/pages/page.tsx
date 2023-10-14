import Container from "src/Components/Container";
import EmptyState from "src/Components/EmptyState";
import EventCard from "src/pages/EventsList/Components/EventCard";

import { Event } from "src/interfaces/event";
import { getCurrentUser } from "src/services/auth";
import { getEvents } from "src/services/event";
import { IEventsParams } from "src/services/event/dto";

interface HomeProps {
  searchParams: IEventsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const events = await getEvents(searchParams);
  const currentUser = await getCurrentUser();

  if (events.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
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

export default Home;
