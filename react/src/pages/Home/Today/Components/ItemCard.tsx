import React from "react";
import { useNavigate } from "react-router-dom";
import CardPhoto from "./CardPhoto";

export type EventProps = {
  eventId?: number;
  title: string;
  img: string;
  price: number;
  desc: string;
  currency: string;
  HostName?: string;
  hostPhoto?: string;
  address?: {
    country: string;
    street: string;
    postalCode: string;
    state: string;
    city: string;
  };
  startDate: Date;
  endDate: Date;
  containerStyle?: React.CSSProperties;
};

const ItemCard: React.FC<EventProps> = ({
  eventId,
  title,
  img,
  price,
  currency,
  containerStyle,
  address,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer hover:brightness-110 hover:contrast-110 transition-opacity duration-300 ease-in-out rounded-lg overflow-hidden"
      onClick={() => navigate(`/events/${eventId}`)}
      key={eventId}
      style={containerStyle}
    >
      <CardPhoto img={img} eventId={Number(eventId)} />
      <div className="py-2 px-1 bg-white flex flex-col gap-2">
        <div className="flex flex-col">
          <h2 className="text-[11pt] font-extrabold truncate">
            {title.length > 18 ? title.slice(0, 18) + ".." : title}
          </h2>
          <span className="text-gray-700 flex text-[11pt] font-semibold items-center">
            {address?.city}
          </span>
        </div>

        <div className="flex flex-row gap-1">
          <span className="text-[12pt] font-bold">
            {currency}
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
