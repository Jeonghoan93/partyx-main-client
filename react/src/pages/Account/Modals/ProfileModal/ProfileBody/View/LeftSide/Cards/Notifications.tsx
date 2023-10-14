import { BiChevronRight } from "react-icons/bi";
import LineContainer from "src/Components/LineContainer";

const Notifications = () => {
  return (
    <LineContainer>
      <div className="pb-5">
        <span className="text-[11pt] font-extrabold text-gray-400">
          Notifications
        </span>
      </div>

      <div className="flex flex-col gap-4 text-gray-900 text-[11pt] font-semibold">
        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
            <span>Push notifications</span>
          </div>

          <span
            onClick={() => alert("Coming soon!")}
            className="cursor-pointer"
          >
            <BiChevronRight size={20} />
          </span>
        </div>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="flex flex-row gap-2 items-center hover:underline cursor-pointer">
            <span>Email</span>
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

export default Notifications;
