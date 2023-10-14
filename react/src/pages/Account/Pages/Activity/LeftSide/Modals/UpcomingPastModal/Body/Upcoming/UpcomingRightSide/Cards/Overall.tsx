import { BiChevronRight } from "react-icons/bi";
import LineContainer from "src/Components/LineContainer";

const Overall = () => {
  return (
    <LineContainer>
      <div className="pb-3">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Overall
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[10pt]">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Total</span>
            </div>
          </div>

          <span className="font-semibold text-gray-500">13</span>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Notification</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <span className="text-[10pt] text-gray-400 font-semibold">
              Never
            </span>
            <span>
              <BiChevronRight size={18} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Invite Friends</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <span>
              <BiChevronRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </LineContainer>
  );
};

export default Overall;
