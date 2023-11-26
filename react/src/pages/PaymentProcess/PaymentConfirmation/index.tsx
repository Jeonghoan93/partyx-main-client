import Container from "src/components/Container";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const PaymentConfirmation: React.FC = () => {
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
          <section className="w-full h-[12vh] overflow-hidden relative rounded-lg">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[21pt]">
                Payment confirmation
              </span>

              <div className="flex flex-row text-center gap-1">
                <span className="font-bold text-[12pt] text-gray-600">
                  Confirmation number:
                </span>

                <span className="font-semibold text-[12pt]">
                  300894-550884459
                </span>
              </div>
            </div>
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

export default PaymentConfirmation;
