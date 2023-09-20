import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import { getCurrentUser } from "src/services/auth";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
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
      <Container>
        <div className="mt-10">
          <ClientOnly>
            <CustomizedSection currentUser={currentUser} />
            <FestivalSection />
            <FeaturedSection />
            <TrendingSection />
            <NewestSection />
          </ClientOnly>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mt-10">
        <ClientOnly>
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
