import LineContainer from "src/components/LineContainer";

const TicketInfoCard = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <div className="flex flex-row gap-1 text-[11pt]">
          <span>1</span>
          <span>×</span>
          <span className="">Hozier Regular</span>
        </div>

        <div className="flex flex-row gap-1 text-[11pt] text-gray-600">
          <span>Today</span>
          <span>•</span>
          <span className="">Avicii Arena</span>
        </div>

        <div className="flex flex-row gap-1 text-[11pt]">
          <span className="text-gray-800 font-bold">SEK</span>
          <span className="text-gray-800 font-bold">540</span>

          <span className="text-gray-600">/</span>
          <span className="text-gray-600">ticket</span>
        </div>
      </section>
    </LineContainer>
  );
};

export default TicketInfoCard;
