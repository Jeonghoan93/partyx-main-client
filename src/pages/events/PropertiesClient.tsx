import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "src/types/user";

import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import Heading from "src/components/Heading";
import ListingCard from "src/components/listings/ListingCard";
import { deleteListing } from "src/services/listing";
import { SafeListing } from "src/types/listing";

interface EventsClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const EventsClient: React.FC<EventsClientProps> = ({
  listings,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState("");

  const onDelete = useCallback(
    (id: string) => {
      setDeletingId(id);

      try {
        deleteListing(id);

        toast.success("Listing deleted");
        navigate("/");
      } catch (err) {
        toast.error("Unknown error");
      } finally {
        setDeletingId("");
      }
    },
    [navigate]
  );

  return (
    <Container>
      <Heading title="Events" subtitle="List of your properties" />
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
        {listings.map((listing: SafeListing) => (
          <ListingCard
            key={listing._id.toString()}
            data={listing}
            actionId={listing._id.toString()}
            onAction={onDelete}
            disabled={deletingId === listing._id.toString()}
            actionLabel="Delete event"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default EventsClient;
