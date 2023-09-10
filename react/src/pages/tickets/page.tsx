import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import { getCurrentUser } from "src/services/auth";
import { getReservations } from "src/services/reservation";

import TicketsClient from "./TicketsClient";

const TicketsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
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
      <TicketsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TicketsPage;
