import React, { useState } from "react";
import Container from "src/Components/Container";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { Event } from "src/interfaces/event";
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

  return (
    <Container>
      <div className="rrelative overflow-hidden h-auto">
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
    </Container>
  );
};

export default FestivalSlider;
