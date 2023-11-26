import { FaCheck } from "react-icons/fa";

const QualityPromiseCard = () => {
  return (
    <section className="p-2 flex flex-col gap-5">
      <div className="flex flex-row items-start gap-3">
        <span className="mt-1">
          <FaCheck color={"green"} size={18} />
        </span>

        <div className="flex flex-col items-start">
          <span className="font-bold">Tickets are checked</span>

          <span className="text-gray-600 text-[11pt]">
            Our anti-fraud system analyses the tickets
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start gap-3">
        <span className="mt-1">
          <FaCheck color={"green"} size={18} />
        </span>

        <div className="flex flex-col items-start">
          <span className="font-bold">Delivery is immediate</span>

          <span className="text-gray-600 text-[11pt]">
            Tickets are available immediately after paying
          </span>
        </div>
      </div>

      <div className="flex flex-row items-start gap-3">
        <span className="mt-1">
          <FaCheck color={"green"} size={18} />
        </span>

        <div className="flex flex-col items-start">
          <span className="font-bold">We are trusted by millions</span>

          <span className="text-gray-600 text-[11pt]">
            Over 10 million fans use PartyX
          </span>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseCard;
