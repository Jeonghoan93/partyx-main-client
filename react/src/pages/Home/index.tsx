import EmptyState from "src/components/EmptyState";

import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import { getCurrentUser } from "src/services/auth";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import HomeSection from "./Sections/HomeSection";
import NewestSection from "./Sections/NewestSection";
import TrendingSection from "./Sections/TrendingSection";

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
    <Container>
      <div className="mt-20">
        <ClientOnly>
          <HomeSection />
          <FestivalSection />
          <FeaturedSection />
          <TrendingSection />
          <NewestSection />
        </ClientOnly>
      </div>
    </Container>
  );
};

export default Home;
