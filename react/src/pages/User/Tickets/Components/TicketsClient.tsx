import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { User } from "src/interfaces/user";

import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import Heading from "src/components/Heading";
import EventCard from "src/components/events/EventCard";
import { Booking } from "src/interfaces/booking";

interface MyTicketsClientProps {
  bookings: Booking[];
  currentUser?: User | null;
}

const TicketsClient: React.FC<MyTicketsClientProps> = ({
  bookings,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState(Number);

  const onCancel = useCallback(
    (id: number) => {
      setDeletingId(id);

      axios
        .delete(`/api/bookings/${id}`)
        .then(() => {
          toast.success("Booking cancelled");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId(Number);
        });
    },
    [navigate]
  );

  return (
    <Container>
      <Heading
        title="Tickets"
        subtitle="Where you've been and where you're going"
      />
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
        {bookings.map((booking: Booking) => (
          <EventCard
            key={booking.bookingId}
            data={booking.event}
            booking={booking}
            actionId={booking.bookingId}
            onAction={onCancel}
            disabled={deletingId === booking.bookingId}
            actionLabel="Cancel booking"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TicketsClient;
