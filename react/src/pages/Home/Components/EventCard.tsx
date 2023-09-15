import React from "react";
import { useNavigate } from "react-router-dom";

type EventCardProps = {
  title: string;
  img: string;
  price: number;
  desc: string;
  currency: string;
  userName: string;
  userPhoto: string;
  boxKey: string;
  containerStyle: React.CSSProperties;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  price,
  currency,
  desc,
  userName,
  userPhoto,
  boxKey,
  containerStyle,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={"cursor-pointer"}
      onClick={() => navigate("/")}
      key={boxKey}
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
            {desc.length > 50 ? desc.substring(0, 50) + "..." : desc}
          </p>
          <p className="text-[12pt] font-bold my-1">
            {currency} {price}
          </p>
          <div className="flex items-center mt-2">
            <img
              src={userPhoto}
              alt={userName}
              className="w-6 h-6 rounded-full"
            />
            <span className="ml-2 text-[6t]">{userName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
