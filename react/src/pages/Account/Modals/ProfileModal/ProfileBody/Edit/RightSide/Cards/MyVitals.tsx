import { BiChevronRight } from "react-icons/bi";
import LineContainer from "src/Components/LineContainer";

const MyVitals = () => {
  return (
    <LineContainer>
      <div className="pb-3">
        <span className="text-[11pt] font-extrabold text-gray-400">
          My Vitals
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[10pt]">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Name</span>
              <span className="font-semibold text-gray-500">Jimmy</span>
            </div>
          </div>

          <span>
            <BiChevronRight size={18} />
          </span>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Gender</span>
              <span className="font-semibold text-gray-500">Man</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <span className="text-[10pt] text-gray-400 font-semibold">
              Hidden
            </span>
            <span>
              <BiChevronRight size={18} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Age</span>
              <span className="font-semibold text-gray-500">30</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <span className="text-[10pt] text-gray-400 font-semibold">
              Always visible
            </span>
            <span>
              <BiChevronRight size={18} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row justify-between items-center hover:underline cursor-pointer">
            <div className="flex flex-col items-start">
              <span className="font-bold">Height</span>
              <span className="font-semibold text-gray-500">182cm</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-1">
            <span className="text-[10pt] text-gray-400 font-semibold">
              Always visible
            </span>
            <span>
              <BiChevronRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </LineContainer>
  );
};

export default MyVitals;
