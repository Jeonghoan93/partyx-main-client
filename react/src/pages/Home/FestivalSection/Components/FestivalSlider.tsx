import React, { useEffect, useState } from "react";
import FestivalCard from "./FestivalCard";

type Festivals = {
  title: string;
  img: string;
  price: number;
  currency: string;
  desc: string;
  userName: string;
  userPhoto: string;
};

type FestivalSliderProps = {
  festivals: Festivals[];
};

const FestivalSlider: React.FC<FestivalSliderProps> = ({ festivals }) => {
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
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, festivals.length - 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="mt-4 relative overflow-hidden h-auto">
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${100 * festivals.length}%`,
          transform: `translateX(-${(startIndex * 100) / festivals.length}%)`,
        }}
      >
        {festivals.map((festival) => (
          <FestivalCard
            {...festival}
            boxKey={festival.title}
            containerStyle={{
              width: isSmallScreen ? "100%" : `${100 / festivals.length}%`,
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
};

export default FestivalSlider;
