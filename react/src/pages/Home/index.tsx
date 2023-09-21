import { useEffect, useState } from "react";
import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import { getCurrentUser } from "src/services/auth";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import NewestSection from "./Sections/NewestSection";
import TodaySection from "./Sections/TodaySection";
import TrendingSection from "./Sections/TrendingSection";

const Home: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
            <TodaySection />
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
          <TodaySection />
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
