import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "src/utils/formatDate";

export type EventProps = {
  eventId?: number;
  title: string;
  img: string;
  price: number;
  desc: string;
  currency: string;
  HostName?: string;
  hostPhoto?: string;
  startDate: Date;
  endDate: Date;
  containerStyle?: React.CSSProperties;
};

const EventCard: React.FC<EventProps> = ({
  eventId,
  title,
  img,
  price,
  currency,
  desc,
  startDate,
  endDate,
  containerStyle,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={"cursor-pointer"}
      onClick={() => navigate(`/events/${eventId}`)}
      key={eventId}
      style={containerStyle}
    >
      <div
        className="relative rounded-lg overflow-hidden bg-transparent"
        style={{
          height: "320px",
        }}
      >
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h2 className="text-[12pt] font-bold my-1">{title}</h2>
          <p className="text-[10pt] text-gray-600">
            {desc.length > 45 ? desc.substring(0, 45) + "..." : desc}
          </p>
          <div className="flex text-[9pt] font-mono font-semibold items-center mt-2">
            {formatDate(startDate, true, endDate)}
          </div>
          <p className="text-[12pt] mt-2 font-bold my-1">
            {currency} {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
