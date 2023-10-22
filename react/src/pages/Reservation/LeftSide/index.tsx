import { ReservationProps } from "..";
import About from "./Cards/About";
import DateLocation from "./Cards/DateLocation";
import EventPhoto from "./Cards/EventPhoto";
import Host from "./Cards/Host";
import Status from "./Cards/Status";

const LeftSide: React.FC<ReservationProps> = ({ reservationId }) => {
  const eventData = useGetEventbyRservationId(reservationId);

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <EventPhoto eventData={eventData} />
      <About eventData={eventData} />
      <DateLocation eventData={eventData} />
      <Host eventData={eventData} />
      <Status reservationId={reservationId} />
    </div>
  );
};

export default LeftSide;
