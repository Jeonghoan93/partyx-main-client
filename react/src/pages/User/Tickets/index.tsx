import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import { getCurrentUser } from "src/services/auth";
import { getBookings } from "src/services/booking";
import TicketsClient from "./Components/TicketsClient";

const Tickets = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserAndBookings = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);

      if (user) {
        const bookings = await getBookings({ userId: user.userId });
        setBookings(bookings);
      }
    };

    fetchUserAndBookings();
  }, []);

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
