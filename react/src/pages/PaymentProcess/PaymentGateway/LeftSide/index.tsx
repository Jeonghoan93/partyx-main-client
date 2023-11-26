import TicketInfoCard from "./Cards/TicketInfoCard";
import { Event } from "src/interfaces/event";

interface Props {
  eventData: Event | undefined;
}

const LeftSide: React.FC<Props> = ({ eventData }) => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <TicketInfoCard eventData={eventData} />
    </div>
  );
};

export default LeftSide;
