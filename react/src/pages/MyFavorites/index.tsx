import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getFavoriteEvents } from "src/services/event";

import { useEffect, useState } from "react";
import FavoritesClient from "./Components/MyFavoritesClient";

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

  if (events.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite events."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient events={events} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Favorites;
