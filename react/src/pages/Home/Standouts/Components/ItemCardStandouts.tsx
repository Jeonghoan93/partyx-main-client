import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemCardProps {
  src: string;
  title: string;
  location: string;
  attendees: number;
  currency: string;
  price: number;
  eventId: number;
}

const ItemCardStandouts: React.FC<ItemCardProps> = ({
  src,
  title,
  location,
  attendees,
  currency,
  price,
  eventId,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "inline-block",
        width: "350px",
        marginRight: "0.5rem",
      }}
      onClick={() => navigate(`/events/${eventId}`)}
      className={`relative h-[50vh] w-full border-[1px] border-neutral-200 rounded-lg shadow-sm overflow-hidden `}
    >
      <img src={src} alt={title} className={`w-full h-full rounded-lg `} />

      <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-black text-white w-full">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col">
            <span className="font-extrabold">{title}</span>
            <span className="text-[10pt] text-gray-200 font-semibold">
              {location}
            </span>
          </div>

          <div className="flex flex-row w-full items-center text-center justify-between">
            <span className="text-[10pt]">{attendees} people</span>
            <span className="text-[10pt] font-bold">
              {currency} {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardStandouts;
