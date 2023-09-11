import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "src/interfaces/user";

import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import Heading from "src/components/Heading";
import ListingCard from "src/components/listings/ListingCard";
import { SafeReservation } from "src/interfaces/reservation";

interface TicketsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TicketsClient: React.FC<TicketsClientProps> = ({
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
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
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
        {reservations.map((reservation: SafeReservation) => (
          <ListingCard
            key={reservation._id.toString()}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation._id.toString()}
            onAction={onCancel}
            disabled={deletingId === reservation._id.toString()}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TicketsClient;
