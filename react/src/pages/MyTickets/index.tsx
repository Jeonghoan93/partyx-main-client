import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import Container from "src/components/Container";
import { getCurrentUser } from "src/services/auth";
import { getBookings } from "src/services/booking";
import MyTicketsClient from "./Components/MyTicketsClient";

const MyTickets = () => {
  const [currentUser, setCurrentUser] = useState(null);
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

  if (bookings.length === 0) {
    return (
      <Container>
        <div className="mt-10">
          <ClientOnly>
            <EmptyState
              title="No ticket found"
              subtitle="Looks like you haven't reserved any ticket."
            />
          </ClientOnly>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mt-10">
        <ClientOnly>
          <MyTicketsClient bookings={bookings} currentUser={currentUser} />
        </ClientOnly>
      </div>
    </Container>
  );
};

export default MyTickets;
