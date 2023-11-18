import React from "react";
import ItemCard, { EventProps } from "./ItemCard";

const CardSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <div className="relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
      {events.slice(5, 12).map((event) => (
        <ItemCard
          {...event}
          key={event.title}
          containerStyle={{
            display: "inline-block",
            width: "240px",
            marginRight: "0.5rem",
          }}
        />
      ))}
    </div>
  );
};

export default CardSlider;
