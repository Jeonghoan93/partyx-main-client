import Container from "src/components/Container";
import Heading from "src/components/Heading";
import ListingCard from "src/components/listings/ListingCard";
import { SafeListing } from "src/types/listing";
import { SafeUser } from "src/types/user";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorited!" />
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
            currentUser={currentUser}
            key={listing._id.toString()}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
