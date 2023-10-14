import React from "react";
import ItemCard, { EventProps } from "./ItemCard";

const CardSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <div className="p-1">
      <div className="relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
        {events.slice(5, 12).map((event) => (
          <ItemCard
            {...event}
            key={event.title}
            containerStyle={{
              display: "inline-block",
              maxWidth: "375px",
              marginRight: "1rem",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
