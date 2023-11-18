import React from "react";
import EventCard, { EventProps } from "./EventCard";

const EventSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  return (
    <div className="relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
      {events.map((event) => (
        <EventCard
          {...event}
          key={event.title}
          containerStyle={{
            display: "inline-block",
            maxWidth: "270px",
            marginRight: "1rem",
          }}
        />
      ))}
    </div>
  );
};

export default EventSlider;
