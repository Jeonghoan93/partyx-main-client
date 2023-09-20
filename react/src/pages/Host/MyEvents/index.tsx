import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getEvents } from "src/services/event";

import { useEffect, useState } from "react";
import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import MyEventsClient from "./Components/MyEventsClient";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserAndEvents = async () => {
      const currentUser = await getCurrentUser();
      setCurrentUser(currentUser);

      if (currentUser) {
        const userEvents = await getEvents({ userId: currentUser.userId });
        setEvents(userEvents);
      }
    };

    fetchUserAndEvents();
  }, []);

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
