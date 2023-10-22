import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { formatDate } from "src/utils/formatDate";

interface ItemCardProps {
  src: string;
  title: string;
  location: string;
  attendees: number;
  currency: string;
  price: number;
  eventId: number;
  date: Date;
  rating: number;
}

const ItemCardStandouts: React.FC<ItemCardProps> = ({
  src,
  title,
  location,
  attendees,
  currency,
  price,
  eventId,
  rating,
  date,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "0.5rem",
      }}
      onClick={() => navigate(`/events/${eventId}`)}
      className={`sm:w-[350px] cursor-pointer relative h-[50vh] w-[93%] border-[1px] border-neutral-200 rounded-lg shadow-sm overflow-hidden `}
    >
      <img src={src} alt={title} className={`w-full h-full rounded-lg `} />

      <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-black text-white w-full">
        <div className="flex flex-col items-start">
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-extrabold text-[12pt]">{title}</span>

            <div className="flex flex-row gap-1 items-center">
              <span>
                <AiFillStar size={13} />
              </span>

              <span className="font-extrabold text-[11pt]">{rating}</span>
            </div>
          </div>

          <div className="flex flex-col pb-3">
            <span className="text-[10pt] text-gray-200 font-bold">
              {location} - {formatDate(date, {})}
            </span>
          </div>

          <div className="flex flex-col w-full items-start text-center">
            <span className="text-[10pt] font-semibold">
              {attendees} people going
            </span>
            <span className="text-[10pt] text-gray-200 font-extrabold">
              {currency} {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardStandouts;
