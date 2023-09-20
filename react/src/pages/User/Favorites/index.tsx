import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getFavoriteEvents } from "src/services/event";

import { useEffect, useState } from "react";
import Container from "src/components/Container";
import FavoritesClient from "./Components/FavoritesClient";

const Favorites = () => {
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserAndEvents = async () => {
      const favoriteEvents = await getFavoriteEvents();
      setEvents(favoriteEvents);

      const user = await getCurrentUser();
      setCurrentUser(user);
    };

    fetchUserAndEvents();
  }, []);

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
