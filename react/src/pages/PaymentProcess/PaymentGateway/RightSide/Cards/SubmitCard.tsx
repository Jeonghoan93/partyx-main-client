import { useNavigate } from "react-router-dom";
import LineContainer from "src/components/LineContainer";

const SubmitCard = () => {
  const navigate = useNavigate();

  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <div className="flex flex-row gap-2 text-[11pt] text-gray-600">
          <span>Total</span>

          <div className="flex flex-row gap-1 font-bold">
            <span className="">SEK</span>
            <span>540</span>
          </div>
        </div>

        <span
          onClick={() => navigate("/payment-gateway/methods")}
          className="cursor-pointer p-2 px-10 border-[2px] bg-neutral-100 hover:shadow hover:bg-neutral-200 rounded-lg font-bold"
        >
          Continue
        </span>
      </section>
    </LineContainer>
  );
};

export default SubmitCard;
