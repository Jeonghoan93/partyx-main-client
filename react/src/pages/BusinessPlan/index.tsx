import { BsRocketTakeoff } from "react-icons/bs";
import Container from "src/components/Container";
import LeftSide from "src/pages/BusinessPlan/Sections/LeftSide";
import RightSide from "src/pages/BusinessPlan/Sections/RightSide";

const BusinessPlan: React.FC = () => {
  return (
    <Container>
      <div
        className="
          mt-[-22pt]
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <section className="w-full h-[40vh] overflow-hidden rounded-xl relative">
            <section className="w-full h-[50vh] overflow-hidden rounded-xl relative">
              <img
                src={"/images/businessPlan.jpeg"}
                style={{ width: "100%", height: "100%" }}
                className="object-cover w-full"
                alt="Image"
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
              {/* This div acts as the overlay */}
            </section>

            <section
              style={{ width: "100%", height: "100%", top: 0, left: 0 }}
              className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-10"
            >
              <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
                <span>
                  <BsRocketTakeoff />
                </span>

                <span>1,000,000,000$</span>
              </div>

              <div>
                <span className="font-normal text-gray-50 text-[12pt]">
                  in 3 years from a raise
                </span>
              </div>

              <div>
                <span className="font-normal text-gray-100 text-[12pt]">
                  and here is how we will do it,{" "}
                  <span className="font-semibold underline">together.</span>
                </span>
              </div>
            </section>
          </section>

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

export default BusinessPlan;
