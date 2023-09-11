import Container from "src/components/Container";
import EmptyState from "src/components/EmptyState";
import ListingCard from "src/components/listings/ListingCard";

import ClientOnly from "src/components/ClientOnly";
import { SafeListing } from "src/interfaces/listing";
import { getCurrentUser } from "src/services/auth";
import { getListings } from "src/services/listing";
import { IListingsParams } from "src/services/listing/dto";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
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
    </ClientOnly>
  );
};

export default Home;
