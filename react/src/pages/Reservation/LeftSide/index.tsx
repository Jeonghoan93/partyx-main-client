import { ReservationProps } from "..";
import About from "./Cards/About";
import DateLocation from "./Cards/DateLocation";
import EventPhoto from "./Cards/EventPhoto";
import Host from "./Cards/Host";
import Status from "./Cards/Status";

const LeftSide: React.FC<ReservationProps> = () => {
  // const eventData = useGetEventbyRservationId(reservationId);

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <EventPhoto />
      <About />
      <DateLocation />
      <Host />
      <Status />
    </div>
  );
};

export default LeftSide;
