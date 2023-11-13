import React from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <div
        className="cursor-pointer hover:brightness-110 hover:contrast-110 transition-opacity duration-300 ease-in-out rounded-lg overflow-hidden"
        onClick={() => navigate(`/events/${eventId}`)}
        key={eventId}
        style={containerStyle}
      >
        <section className="w-full h-[20vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
          <section className="w-full h-[40vh] overflow-hidden relative">
            <img
              src={img}
              style={{ width: "100%", height: "100%" }}
              className="object-cover w-full"
              alt="Image"
            />
            <div className={"absolute inset-0 bg-black opacity-50"}></div>{" "}
            {/* This div acts as the overlay */}
          </section>

          <section
            style={{ width: "100%", height: "100%", top: 0, left: 0 }}
            className="absolute object-cover w-full items-center justify-center flex flex-col gap-4 z-1"
          >
            <div className="text-white flex flex-col items-center text-center gap-2">
              <span className="text-[15pt] text-gray-50 font-extrabold">
                {title.length > 18 ? title.slice(0, 18) + ".." : title}
              </span>
              <span className="text-[10pt] font-bold px-3 text-gray-100">
                {address?.street}, {address?.city}
              </span>
              <span
                onClick={() => alert("Coming soon!")}
                className="text-[10pt] font-extrabold px-3 text-gray-100"
              >
                {currency}
                {price}
              </span>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default ItemCard;
