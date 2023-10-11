import { BiBook } from "react-icons/bi";
import LineContainer from "src/components/LineContainer";

const Tax = () => {
  return (
    <LineContainer>
      <div
        onClick={() => alert("Not yet")}
        className="flex flex-row items-center gap-4 cursor-pointer"
      >
        <span>
          <BiBook size={28} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[12pt] font-bold">Tax</span>
          <span className="text-[9pt] font-semibold text-gray-700">
            Tax details and settings.
          </span>
        </div>
      </div>
    </LineContainer>
  );
};

export default Tax;
