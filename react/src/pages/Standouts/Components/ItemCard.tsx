import React from "react";

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

interface ItemCardProps {
  src: string;
  title: string;
  location: string;
  attendees: number;
  currency: string;
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  src,
  title,
  location,
  attendees,
  currency,
  price,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        maxWidth: "80vw",
        marginRight: "1rem",
      }}
      className={`relative h-[50vh] w-full border-[1px] border-neutral-200 rounded-lg shadow-sm overflow-hidden `}
    >
      <img src={src} alt={title} className={`w-full h-full rounded-lg `} />
      <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-black text-white w-full">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col gap-1">
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

export default ItemCard;
