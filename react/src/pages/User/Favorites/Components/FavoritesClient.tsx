import Container from "src/components/Container";
import Heading from "src/components/Heading";
import EventCard from "src/components/events/EventCard";
import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";

interface FavoritesClientProps {
  events: Event[];
  currentUser?: User | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  events,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
      <div
        className="
          mt-10
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

export default FavoritesClient;
