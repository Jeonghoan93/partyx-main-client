import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { User } from "src/interfaces/user";

import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import Heading from "src/components/Heading";
import EventCard from "src/components/events/EventCard";
import { Event } from "src/interfaces/event";
import { deleteEvent } from "src/services/event";

interface MyEventsClientProps {
  events: Event[];
  currentUser?: User | null;
}

const MyEventsClient: React.FC<MyEventsClientProps> = ({
  events,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState(Number);

  const onDelete = useCallback(
    (id: number) => {
      setDeletingId(id);

      try {
        deleteEvent(id);

        toast.success("Event deleted");
        navigate("/");
      } catch (err) {
        toast.error("Unknown error");
      } finally {
        setDeletingId(Number);
      }
    },
    [navigate]
  );

  return (
    <Container>
      <Heading title="Events" subtitle="List of your events" />
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
            key={event.eventId}
            data={event}
            actionId={event.eventId}
            onAction={onDelete}
            disabled={deletingId === event.eventId}
            actionLabel="Delete event"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default MyEventsClient;
