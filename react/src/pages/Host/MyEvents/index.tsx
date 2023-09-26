import EmptyState from "src/components/EmptyState";

import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useEvents } from "src/hooks/useEvents";
import MyEventsClient from "./Components/MyEventsClient";

const MyEvents = () => {
  const currentUser = useCurrentUser();
  const events = useEvents(currentUser?.userId ?? null);

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  return (
    <Container>
      <div className="p-3">
        <div className="mb-2">
          <h2 className="text-[16pt] font-bold">My listings</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Click the listing to see more details!
          </span>
        </div>
        {events.length === 0 ? (
          <EmptyState
            title="No events found"
            subtitle="Looks like you have no events."
          />
        ) : (
          <MyEventsClient events={events} currentUser={currentUser} />
        )}
      </div>
    </Container>
  );
};

export default MyEvents;
