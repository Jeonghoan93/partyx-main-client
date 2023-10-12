import React, { useState } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import EventCard, { EventProps } from "./EventCard";

const EventSlider: React.FC<{ events: EventProps[] }> = ({ events }) => {
  const windowWidth = useWindowWidth();
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  if (windowWidth < 475) {
    return (
      <div className="mt-4 relative overflow-hidden h-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${100 * events.length}%`,
            transform: `translateX(-${(startIndex * 100) / events.length}%)`,
          }}
        >
          {events.map((event) => (
            <EventCard
              {...event}
              key={event.title}
              containerStyle={{
                width: "100%",
              }}
            />
          ))}
        </div>
        {startIndex > 0 && (
          <button
            className="ml-2 absolute left-0 top-[150px] transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
            onClick={handlePrev}
          >
            ←
          </button>
        )}
        {startIndex < events.length - 1 && (
          <button
            className="mr-2 absolute right-0 top-[150px] transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
            onClick={handleNext}
          >
            →
          </button>
        )}
      </div>
    );
  }

  if (windowWidth >= 475) {
    return (
      <div className="mt-4 relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
        {events.map((event) => (
          <EventCard
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
  }
};

export default EventSlider;
