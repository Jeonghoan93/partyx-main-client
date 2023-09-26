import EmptyState from "src/components/EmptyState";

import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useEvents } from "src/hooks/useEvents";
import FavoritesClient from "./Components/FavoritesClient";

const Favorites = () => {
  const currentUser = useCurrentUser();
  const events = useEvents(currentUser?.userId ?? null);

  return (
    <Container>
      <div className="p-3">
        <div className="mb-2">
          <h2 className="text-[16pt] font-bold">Favorites</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Click the heart icons to add events to your favorites!
          </span>
        </div>
        {events.length === 0 ? (
          <EmptyState
            title="No favorites found"
            subtitle="Looks like you have no favorite events."
          />
        ) : (
          <FavoritesClient events={events} currentUser={currentUser} />
        )}
      </div>
    </Container>
  );
};

export default Favorites;
