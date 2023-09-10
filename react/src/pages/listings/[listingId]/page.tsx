import { getCurrentUser } from "src/services/auth";
import { getListingById } from "src/services/listing";
import { getReservations } from "src/services/reservation";

import ClientOnly from "src/components/ClientOnly";
import EmptyState from "src/components/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  if (!params.listingId) {
    return;
  }
  const listing = await getListingById(params.listingId);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
