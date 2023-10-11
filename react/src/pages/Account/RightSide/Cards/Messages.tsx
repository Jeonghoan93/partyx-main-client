import { BiMessageSquareDetail } from "react-icons/bi";

const Messages = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
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
    </div>
  );
};

export default Messages;
