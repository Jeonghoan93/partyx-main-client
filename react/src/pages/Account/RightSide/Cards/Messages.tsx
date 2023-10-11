import { BiMessageSquareDetail } from "react-icons/bi";
import LineContainer from "src/components/LineContainer";

const Messages = () => {
  return (
    <LineContainer>
      <div
        onClick={() => alert("Not yet")}
        className="flex flex-row items-center gap-4 cursor-pointer"
      >
        <span>
          <BiMessageSquareDetail size={28} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-[12pt] font-bold">Messages</span>
        </div>
      </div>
    </LineContainer>
  );
};

export default Messages;
