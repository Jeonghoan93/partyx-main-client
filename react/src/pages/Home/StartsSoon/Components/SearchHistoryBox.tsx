import { BiTime } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Address } from "src/interfaces/event";
import { formatDate } from "src/utils/formatDate";

interface SearchHistoryBoxProps {
  title: string;
  address: Address;
  startDate: Date;
  endDate: Date;
  eventId?: number;
}

const SearchHistoryBox: React.FC<SearchHistoryBoxProps> = ({
  title,
  address,
  startDate,
  endDate,
  eventId,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/events/${eventId}`)}
      key={eventId}
      className="flex flex-row gap-4 items-center"
    >
      <span>
        <BiTime size={22} />
      </span>

      <div className="flex flex-col">
        <span className="text-[11pt] font-semibold">{title}</span>
        <span className="text-[10pt] text-gray-700">
          {" "}
          {formatDate(startDate, {
            endDate: endDate,
          })}
          {" - "}
          {address.city}
        </span>
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default SearchHistoryBox;
