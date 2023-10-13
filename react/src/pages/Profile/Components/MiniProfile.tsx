import { BsDoorOpen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Event } from "src/interfaces/event";

interface MiniProfileProps {
  name: string;
  img: string;
  desc: string;
  hostedEvents?: Event[];
}

const MiniProfile: React.FC<MiniProfileProps> = ({
  name,
  img,
  desc,
  hostedEvents,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <div className="flex flex-row gap-3 items-center">
        <span>
          <img
            className="rounded-full"
            height="40"
            width="40"
            alt="Avatar"
            src={img}
          />
        </span>
        <div className="flex flex-col">
          <span className="text-[10pt] font-semibold flex flex-row gap-1">
            <span>{name}</span>·
            <span className="text-gray-500 font-bold">
              {hostedEvents?.length}
            </span>
            <span className="text-gray-500">events</span>
          </span>
          <span className="text-[9pt] text-gray-600">{desc}</span>
        </div>
      </div>

      <div
        onClick={() => navigate("/profile/" + name)}
        className="cursor-pointer flex flex-row gap-1 items-center text-[11pt]"
      >
        <span className="underline">Visit</span>
        <span>
          <BsDoorOpen />
        </span>
      </div>
    </div>
  );
};

export default MiniProfile;
