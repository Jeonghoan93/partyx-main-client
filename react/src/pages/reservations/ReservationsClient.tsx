import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Container from "src/components/Container";
import Heading from "src/components/Heading";
import EventCard from "src/components/events/EventCard";
import { SafeReservation } from "src/interfaces/reservation";
import { SafeUser } from "src/interfaces/user";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          navigate("/");
        })
        .catch(() => {
          toast.error("Something went wrong.");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [navigate]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
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
        {reservations.map((reservation: SafeReservation) => (
          <EventCard
            key={reservation.eventId}
            data={reservation.event}
            reservation={reservation}
            actionId={reservation.eventId.toString()}
            onAction={onCancel}
            disabled={deletingId === reservation.eventId.toString()}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
