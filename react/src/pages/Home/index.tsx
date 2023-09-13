import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import { getCurrentUser } from "src/services/auth";
import FeaturedCard from "./FeaturedCard";
import HomeCard from "./HomeCard";
import NewestCard from "./NewestCard";
import TrendingCard from "./TrendingCard";

const Home: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const user = await getCurrentUser();
      setCurrentUser(user);
    }

    fetchCurrentUser();
  }, []);

  if (currentUser) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <>
      <ClientOnly>
        <HomeCard />
        <FeaturedCard />
        <TrendingCard />
        <NewestCard />
      </ClientOnly>
    </>
  );
};

export default Home;
