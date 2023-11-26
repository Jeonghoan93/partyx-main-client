import AddVideo from "./Cards/AddVideo";
import TicketInfoCard from "./Cards/TicketInfoCard";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <TicketInfoCard />
    </div>
  );
};

export default LeftSide;
