import React, { useEffect, useState } from "react";
import EventCard from "./EventCard.tsx";

type Events = {
  title: string;
  img: string;
  price: number;
  desc: string;
  currency: string;
  userName: string;
  userPhoto: string;
};

type EventSliderProps = {
  events: Events[];
};

const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
  const isClient = typeof window === "object";
  const initialWidth = isClient ? window.innerWidth : 1200;
  const [windowWidth, setWindowWidth] = useState(initialWidth);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 768;

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, events.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="mt-4 relative overflow-hidden h-auto">
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${100 * events.length}%`,
          transform: `translateX(-${(startIndex * 100) / events.length}%)`,
        }}
      >
        {events.map((festival) => (
          <EventCard
            {...festival}
            boxKey={festival.title}
            containerStyle={{
              width: isSmallScreen ? "100%" : `${100 / events.length}%`,
            }}
          />
        ))}
      </div>
      {startIndex > 0 && (
        <button
          className="ml-2 absolute left-0 top-1/4 transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
          onClick={handlePrev}
        >
          ←
        </button>
      )}
      {startIndex < events.length - 1 && (
        <button
          className="mr-2 absolute right-0 top-1/4 transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
          onClick={handleNext}
        >
          →
        </button>
      )}
    </div>
  );
};

export default EventSlider;
