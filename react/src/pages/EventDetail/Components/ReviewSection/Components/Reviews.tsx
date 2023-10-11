import React, { useState } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { Review } from "src/interfaces/review";
import ReviewCard from "./ReviewCard";

const Reviews: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const windowWidth = useWindowWidth();
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - 1));
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
            width: `${100 * reviews.length}%`,
            transform: `translateX(-${(startIndex * 100) / reviews.length}%)`,
          }}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.reviewId}
              review={review}
              containerStyle={{
                display: "inline-block",
                maxWidth: "375px",
                marginRight: "1rem",
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
        {startIndex < reviews.length - 1 && (
          <button
            className="mr-2 absolute right-0 top-1/4 transform -translate-y-1/2 text-white font-bold px-3 py-2 rounded-full"
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
      <div className="mt-4 relative overflow-x-auto h-auto whitespace-nowrap">
        {reviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            review={review}
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

export default Reviews;
