import { useNavigate } from "react-router-dom";
import LineContainer from "src/components/LineContainer";
import { Event } from "src/interfaces/event";

interface Props {
  eventData: Event | undefined;
  ticketCount: number;
}

const SubmitCard: React.FC<Props> = ({ eventData, ticketCount }) => {
  const navigate = useNavigate();

  const totalPrice = (price: number | undefined, ticketCount: number) => {
    return price ? price * ticketCount : 0;
  };

  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <div className="flex flex-row gap-2 text-[11pt] text-gray-600">
          <span>Total</span>

          <div className="flex flex-row gap-1 font-bold">
            <span className="">{eventData?.currency}</span>
            <span>{totalPrice(eventData?.price, ticketCount)}</span>
          </div>
        </div>

        <span
          onClick={() =>
            navigate(`/payment-gateway/${eventData?.eventId}/methods`)
          }
          className="cursor-pointer p-2 px-10 border-[2px] bg-neutral-100 hover:shadow hover:bg-neutral-200 rounded-lg font-bold"
        >
          Continue
        </span>
      </section>
    </LineContainer>
  );
};

export default SubmitCard;
