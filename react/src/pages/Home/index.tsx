import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import MainSection from "./Sections/MainSection";
import NearSection from "./Sections/NearSection";
import NewestSection from "./Sections/NewestSection";
import TodaySection from "./Sections/TodaySection";
import TrendingSection from "./Sections/TrendingSection";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <div className={isMobile ? `mt-20` : `mt-5`}>
      {!isMobile ? (
        <Container>
          <section className="w-full h-[50vh] overflow-hidden relative mb-3 rounded-md">
            <section className="w-full h-[50vh] overflow-hidden relative">
              <img
                src={"/images/party.jpg"}
                style={{ width: "100%", height: "100%" }}
                className="object-cover w-full"
                alt="Image"
              />
              <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
              {/* This div acts as the overlay */}
            </section>

            <section
              style={{ width: "100%", height: "100%", top: 0, left: 0 }}
              className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
            >
              <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
                <MainSection />
              </div>
            </section>
          </section>
        </Container>
      ) : (
        <MainSection />
      )}

      <Container>
        {currentUser ? <CustomizedSection currentUser={currentUser} /> : null}
        <TodaySection />
        <NearSection />
        <FestivalSection />
        <FeaturedSection />
        <TrendingSection />
        <NewestSection />
      </Container>
    </div>
  );
};

export default Home;
