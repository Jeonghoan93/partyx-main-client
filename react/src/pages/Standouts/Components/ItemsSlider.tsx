import React from "react";
import { events } from "src/services/api-examples/events";
import ItemCard from "./ItemCard";

const ItemsSlider: React.FC = () => {
  return (
    <div className="mt-4 relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
      {events.slice(5, 12).map((event) => (
        <ItemCard
          src={event.img}
          title={event.title}
          location={event.address?.city || "Unknown"}
          attendees={event.minGuests || 0}
          currency={event.currency || "USD"}
          price={event.price}
        />
      ))}
    </div>
  );
};

export default ItemsSlider;