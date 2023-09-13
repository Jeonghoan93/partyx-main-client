import React, { useState } from "react";
import EventCard from "./EventCard";

type Event = {
  title: string;
  img: string;
  price: number;
  desc: string;
  userName: string;
  userPhoto: string;
};

type EventSliderProps = {
  events: Event[];
};

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative overflow-hidden h-auto">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${startIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div
            key={event.title}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2"
          >
            <EventCard {...event} />
          </div>
        ))}
      </div>
      {startIndex > 0 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          onClick={handlePrev}
        >
          ←
        </button>
      )}
      {startIndex < events.length - 1 && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
          onClick={handleNext}
        >
          →
        </button>
      )}
    </div>
  );
};

export default EventSlider;
