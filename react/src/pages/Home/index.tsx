import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import NewestSection from "./Sections/NewestSection";
import TodaySection from "./Sections/TodaySection";
import TrendingSection from "./Sections/TrendingSection";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();

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
