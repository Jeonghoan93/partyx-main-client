import React from "react";

type EventCardProps = {
  title: string;
  img: string;
  price: number;
  desc: string;
  userName: string;
  userPhoto: string;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  price,
  desc,
  userName,
  userPhoto,
}) => (
  <div className="border p-4 w-64 rounded-md">
    <img
      src={img}
      alt={title}
      className="w-full h-40 object-cover rounded-md"
    />
    <h2 className="text-xl font-bold my-2">{title}</h2>
    <p className="text-gray-600">{desc}</p>
    <p className="font-medium my-2">Price: ${price}</p>
    <div className="flex items-center mt-4">
      <img src={userPhoto} alt={userName} className="w-10 h-10 rounded-full" />
      <span className="ml-4 text-lg">{userName}</span>
    </div>
  </div>
);

export default EventCard;