import EmptyState from "src/components/EmptyState";

import Container from "src/components/Container";
import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import TicketsClient from "./Components/TicketsClient";

const Tickets = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);

  return (
    <Container>
      <div className="p-3">
        <div className="mb-2">
          <h2 className="text-[16pt] font-bold">Tickets</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Click the ticket to see more details!
          </span>
        </div>
        {bookings.length === 0 ? (
          <EmptyState
            title="No ticket found"
            subtitle="Looks like you haven't reserved any ticket."
          />
        ) : (
          <TicketsClient bookings={bookings} currentUser={currentUser} />
        )}
      </div>
    </Container>
  );
};

export default Tickets;
