import Container from "src/Components/Container";

import PastLeftSide from "./Past/PastLeftSide";
import PastRightSide from "./Past/PastRightSide";
import UpcomingLeftSide from "./Upcoming/UpcomingLeftSide";
import UpcomingRightSide from "./Upcoming/UpcomingRightSide";

const UpcomingPastBody: React.FC<{ mode: string }> = ({ mode }) => {
  return (
    <Container>
      <div
        className="
          pb-10
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
            {mode === "upcoming" ? <UpcomingLeftSide /> : <PastLeftSide />}
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              {mode === "upcoming" ? <UpcomingRightSide /> : <PastRightSide />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpcomingPastBody;
