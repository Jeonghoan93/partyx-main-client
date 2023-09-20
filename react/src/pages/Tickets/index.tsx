import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import { getCurrentUser } from "src/services/auth";
import { getBookings } from "src/services/booking";
import TicketsClient from "./Components/TicketsClient";

const Tickets = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchUserAndBookings = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);

      if (user) {
        const bookings = await getBookings({ userId: user.id });
        setBookings(bookings);
      }
    };

    fetchUserAndBookings();
  }, []);

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (bookings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No ticket found"
          subtitle="Looks like you haven't reserved any ticket."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TicketsClient bookings={bookings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Tickets;
