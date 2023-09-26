import { useEffect, useState } from "react";
import { getEvents } from "src/services/event";

export function useEvents(userId: number | null) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      if (userId) {
        const userEvents = await getEvents({ userId });
        setEvents(userEvents);
      }
    }

    fetchEvents();
  }, [userId]);

  return events;
}
