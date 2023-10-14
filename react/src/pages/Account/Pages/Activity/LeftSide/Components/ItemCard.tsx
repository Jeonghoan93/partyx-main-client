import { useNavigate } from "react-router-dom";

interface ItemCardProps {
  img: string;
  title: string;
  street: string;
  city: string;
  date: string;
  eventId: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  img,
  title,
  street,
  city,
  date,
  eventId,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 rounded-lg shadow border-[1px] border-neutral-200">
      <div className="flex flex-row gap-2">
        <div
          onClick={() => navigate(`/reservation/${eventId}`)}
          className="cursor-pointer h-[60pt] w-[70pt] rounded-l-lg"
        >
          <img
            src={img}
            alt="User upload"
            className={`w-full h-full rounded-l-lg`}
          />
        </div>

        <div className="p-2 w-full">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center justify-between w-full">
              <span className="font-extrabold text-[10pt]">{title}</span>

              <span
                onClick={() => navigate(`/reservation/${eventId}`)}
                className="cursor-pointer font-bold text-[9pt] text-gray-700"
              >
                View detail
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-[9pt] text-gray-700">{date}</span>
              <span className="font-bold text-[9pt] text-gray-700">
                {street}, {city}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
