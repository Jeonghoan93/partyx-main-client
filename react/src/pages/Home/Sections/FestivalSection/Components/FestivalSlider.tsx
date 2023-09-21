import React, { useState } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { Event } from "src/interfaces/event";
import EventCard from "src/pages/Home/Components/EventCard";
import FestivalCard from "./FestivalCard";

type FestivalSliderProps = {
  festivals: Event[];
};

const FestivalSlider: React.FC<FestivalSliderProps> = ({ festivals }) => {
  const windowWidth = useWindowWidth();
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, festivals.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  if (windowWidth < 667) {
    return (
      <div className="mt-4 mb-5 relative overflow-hidden h-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${100 * festivals.length}%`,
            transform: `translateX(-${(startIndex * 100) / festivals.length}%)`,
          }}
        >
          {festivals.map((festival) => (
            <FestivalCard
              key={festival.eventId}
              event={festival}
              containerStyle={{
                width:
                  windowWidth < 768 ? "100%" : `${100 / festivals.length}%`,
              }}
            />
          ))}
        </div>
        {startIndex > 0 && (
          <button
            className="mr-2 absolute left-0 top-1/2 transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
            onClick={handlePrev}
          >
            ←
          </button>
        )}
        {startIndex < festivals.length - 1 && (
          <button
            className="mr-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
            onClick={handleNext}
          >
            →
          </button>
        )}
      </div>
    );
  }
  if (windowWidth >= 667) {
    return (
      <div className="mt-4 relative overflow-x-auto h-auto whitespace-nowrap no-scrollbar">
        {festivals.map((event) => (
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

export default FestivalSlider;
