import Container from "src/components/Container";
import { Event } from "src/interfaces/event";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useParams } from "react-router-dom";
import { events } from "src/services/api-examples/events";

const PaymentGateway: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

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
          <section className="w-full overflow-hidden relative rounded-lg">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[21pt]">Cart</span>

              <span className="font-semibold text-[13pt]">
                Your tickets are reserved for 10 minutes.
              </span>
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
            <LeftSide eventData={eventData} />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide ticketCount={3} eventData={eventData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentGateway;
