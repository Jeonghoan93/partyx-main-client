import Container from "src/components/Container";
import BodyCareer from "./Sections/BodyCareer";
import HeaderInvestor from "./Sections/HeaderInvestor";

const Career = () => {
  return (
    <Container>
      <div
        className="
          py-5
          sm:py-10
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
          s    md:gap-3 
            "
          >
            <HeaderInvestor />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <BodyCareer />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
