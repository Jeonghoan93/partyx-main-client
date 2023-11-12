import Container from "src/components/Container";

import EditLeftSide from "./Edit/LeftSide";
import EditRightSide from "./Edit/RightSide";
import ViewLeftSide from "./View/LeftSide";
import ViewRightSide from "./View/RightSide";

const ProfileBody: React.FC<{ mode: string }> = ({ mode }) => {
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
            {mode === "edit" ? <EditLeftSide /> : <ViewLeftSide />}
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              {mode === "edit" ? <EditRightSide /> : <ViewRightSide />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileBody;
