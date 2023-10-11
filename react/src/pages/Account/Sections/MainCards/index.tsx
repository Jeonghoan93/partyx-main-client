import Container from "src/components/Container";

import LeftSide from "./Sections/LeftSide";
import RightSide from "./Sections/RightSide";

const MainCards: React.FC = () => {
  return (
    <Container>
      <div
        className="
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainCards;
