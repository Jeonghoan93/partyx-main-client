import { Event } from "src/interfaces/event";
import SubmitCard from "./Cards/SubmitCard";

interface Props {
  eventData: Event | undefined;
  ticketCount: number;
}

const RightSide: React.FC<Props> = ({ eventData, ticketCount }) => {
  return (
    <section className="flex flex-col gap-3">
      <SubmitCard ticketCount={ticketCount} eventData={eventData} />
    </section>
  );
};

export default RightSide;
