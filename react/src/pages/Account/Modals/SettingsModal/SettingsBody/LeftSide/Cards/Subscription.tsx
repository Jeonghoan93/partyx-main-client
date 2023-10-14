import { BiChevronRight } from "react-icons/bi";
import LineContainer from "src/Components/LineContainer";

const Subscription = () => {
  return (
    <LineContainer>
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Subscription
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Subscribe to PartyX</span>
            </div>

            <span className="text-gray-400 text-[10pt]">
              You're not currently subscribed.
            </span>
          </div>

          <span
            onClick={() => alert("Coming soon!")}
            className="cursor-pointer"
          >
            <BiChevronRight size={20} />
          </span>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
              <span>Restore subscription</span>
            </div>
          </div>

          <span
            onClick={() => alert("Coming soon!")}
            className="cursor-pointer"
          >
            <BiChevronRight size={20} />
          </span>
        </div>
      </div>
    </LineContainer>
  );
};

export default Subscription;
