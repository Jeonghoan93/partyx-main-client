import { useParams } from "react-router-dom";
import Button from "src/Components/Button";

import { Event } from "src/interfaces/event";
import { events } from "src/services/api-examples/events";
import { formatDate } from "src/utils/formatDate";
const FooterEventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const eventData = events.find(
    (event: Event) => event.eventId === Number(eventId)
  );

  return (
    <div
      style={{ height: "73px" }}
      className={`border-t-[1px] fixed bottom-0 w-full bg-gray-50 shadow-md transition-transform duration-500 `}
    >
      <div className="flex flex-row justify-between items-center h-full px-6">
        <div className="flex flex-col">
          <div className="flex flex-row gap-1">
            <span className="font-bold">
              {eventData?.currency}
              {eventData?.price}
            </span>
          </div>

          <span className="underline text-[11pt] font-semibold">
            {formatDate(eventData?.startDate || new Date(), {
              endDate: eventData?.endDate,
            })}
          </span>
        </div>

        <span style={{ minWidth: "120px" }}>
          <Button label={"Find Ticket"} onClick={() => alert("No ticket")} />
        </span>
      </div>
    </div>
  );
};

export default FooterEventDetail;
