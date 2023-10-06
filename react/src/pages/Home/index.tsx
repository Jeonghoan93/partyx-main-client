import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import NearSection from "./Sections/NearSection";
import NewestSection from "./Sections/NewestSection";
import TodaySection from "./Sections/TodaySection";
import TrendingSection from "./Sections/TrendingSection";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <Container>
      <div className={isMobile ? `mt-20` : `mt-10`}>
        {currentUser ? <CustomizedSection currentUser={currentUser} /> : null}
        <TodaySection />
        <NearSection />
        <FestivalSection />
        <FeaturedSection />
        <TrendingSection />
        <NewestSection />
      </div>
    </Container>
  );
};

export default Home;
