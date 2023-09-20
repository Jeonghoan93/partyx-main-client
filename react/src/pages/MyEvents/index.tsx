import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getEvents } from "src/services/event";

import { useEffect, useState } from "react";
import MyEventsClient from "./Components/MyEventsClient";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserAndEvents = async () => {
      const currentUser = await getCurrentUser();
      setCurrentUser(currentUser);

      if (currentUser) {
        const userEvents = await getEvents({ userId: currentUser.id });
        setEvents(userEvents);
      }
    };

    fetchUserAndEvents();
  }, []);

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (events.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No events found"
          subtitle="Looks like you have no events."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <MyEventsClient events={events} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default MyEvents;
