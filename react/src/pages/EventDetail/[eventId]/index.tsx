import { getCurrentUser } from "src/services/auth";
import { getEventById } from "src/services/event";
import { getReservations } from "src/services/reservation";

import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import EventClient from "./Components/EventClient";

interface IParams {
  eventId?: string;
}

const EventDetail = async ({ params }: { params: IParams }) => {
  if (!params.eventId) {
    return;
  }
  const event = await getEventById(params.eventId);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!event) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <EventClient
        event={event}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default EventDetail;
