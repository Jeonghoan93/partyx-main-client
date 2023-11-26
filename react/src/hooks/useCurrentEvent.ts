import { useEffect, useState } from "react";
import { Event } from "src/interfaces/event";
import { getEventById } from "src/services/event";

export function useCurrentEvent(eventId: number | null) {
  const [eventData, setEventData] = useState<Event>({} as Event);
  const [eventLoading, setEventLoading] = useState(false);
  const [eventError, setEventError] = useState(null);

  useEffect(() => {
    if (eventId !== null) {
      const fetchEvent = async () => {
        setEventLoading(true);
        try {
          const response = await getEventById(`${eventId}`);
          const data = await response.json();
          setEventData(data);
        } catch (err) {
          setEventError(err);
        } finally {
          setEventLoading(false);
        }
      };

      fetchEvent();
    }
  }, [eventId]);

  return { eventData, eventLoading, eventError };
}
