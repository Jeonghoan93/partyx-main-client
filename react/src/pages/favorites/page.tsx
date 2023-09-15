import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getFavoriteEvents } from "src/services/event";

import FavoritesClient from "./FavoritesClient";

const EventPage = async () => {
  const events = await getFavoriteEvents();
  const currentUser = await getCurrentUser();

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

export default EventPage;
