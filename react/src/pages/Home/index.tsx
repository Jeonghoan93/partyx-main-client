import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import MainSection from "./Components/MainSection";
import Customized from "./Customized";
import Featured from "./Featured";
import Festivals from "./Festivals";
import Near from "./Near";
import StartsSoon from "./StartsSoon";
import Suggestions from "./Suggestions";
import Today from "./Today";
import { default as Trending } from "./Trending";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <div>
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
      ) : null}

      <Suggestions />
      <StartsSoon />

      {currentUser ? <Customized currentUser={currentUser} /> : null}
      <Today />
      <Near />
      <Featured />
      <Festivals />
      <Trending />
    </div>
  );
};

export default Home;
