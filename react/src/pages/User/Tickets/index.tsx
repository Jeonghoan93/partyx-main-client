import EmptyState from "src/components/EmptyState";

import Button from "src/components/Button";
import Container from "src/components/Container";
import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import TicketsClient from "./Components/TicketsClient";

const Tickets = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);
  const loginModal = useLoginModal();

  if (!currentUser) {
    return (
      <Container>
        <div
          style={{ maxWidth: "500px" }}
          className="p-2 mt-10 flex flex-col h-screen gap-6"
        >
          <h2 className="text-[24pt] font-bold">Bookings</h2>

          <div className="flex flex-col gap-2">
            <span className="text-[14pt] font-bold">
              Log in to view your bookings
            </span>
            <span className="text-[12pt] text-gray-600">
              You can view, or modify bookings once you've logged in.
            </span>
          </div>

          <div style={{ maxWidth: "100px" }}>
            <Button label="Log in" onClick={loginModal.onOpen} />
          </div>
        </div>
      </Container>
    );
  }

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
