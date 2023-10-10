import React from "react";
import ItemCard, { EventProps } from "./ItemCard";

const CardSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <div className="mt-4 relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
      {events.slice(3, 6).map((event) => (
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
  );
};

export default CardSlider;
