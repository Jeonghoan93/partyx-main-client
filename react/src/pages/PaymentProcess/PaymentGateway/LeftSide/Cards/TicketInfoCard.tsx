import LineContainer from "src/components/LineContainer";
import { Event } from "src/interfaces/event";

interface Props {
  eventData: Event | undefined;
}

const TicketInfoCard: React.FC<Props> = ({ eventData }) => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <div className="flex flex-row gap-1 text-[11pt]">
          <span>1</span>
          <span>×</span>
          <span className="font-semibold">{eventData?.title}</span>
        </div>

        <div className="flex flex-row gap-1 text-[11pt] text-gray-600">
          <span>
            {eventData?.startDate?.toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </span>
          <span>•</span>
          <span className="">
            {eventData?.address?.street}, {eventData?.address?.city}
          </span>
        </div>

        <div className="flex flex-row gap-1 text-[11pt]">
          <span className="text-gray-800 font-bold">{eventData?.currency}</span>
          <span className="text-gray-800 font-bold">{eventData?.price}</span>

          <span className="text-gray-600">/</span>
          <span className="text-gray-600">ticket</span>
        </div>
      </section>
    </LineContainer>
  );
};

export default TicketInfoCard;
