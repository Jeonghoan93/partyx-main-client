import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";
import EventCard from "src/components/events/EventCard";

import ClientOnly from "src/components/ClientOnly";
import { SafeEvent } from "src/interfaces/event";
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
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
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
          {events.map((event: SafeEvent) => (
            <EventCard
              currentUser={currentUser}
              key={event.eventId}
              data={event}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
