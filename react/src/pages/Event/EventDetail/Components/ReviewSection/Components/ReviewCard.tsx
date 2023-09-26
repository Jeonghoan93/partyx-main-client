import React from "react";
import { useNavigate } from "react-router-dom";
import { Review } from "src/interfaces/review";
import { formatDate } from "src/utils/formatDate";

export type ReviewProps = {
  review: Review;
  containerStyle?: React.CSSProperties;
};

const ReviewCard: React.FC<ReviewProps> = ({ review, containerStyle }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        " border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
      }
      onClick={() => navigate(`/profile/${review.user.name}`)}
      key={review.reviewId}
      style={containerStyle}
    >
      <div
        className="relative rounded-lg overflow-hidden bg-transparent flex flex-col justify-between"
        style={{
          height: "180px",
        }}
      >
        <div className="p-2">
          <p className="text-[10pt] text-gray-600">
            {review.reviewDesc.length > 100
              ? review.reviewDesc.substring(0, 100) + "..."
              : review.reviewDesc}
          </p>
          {review.reviewDesc.length > 100 && (
            <button className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
              Read More
            </button>
          )}
        </div>
        <div className="flex p-2 items-center">
          <img
            src={review.user.img}
            alt={review.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p className="font-bold">{review.user.name}</p>
            <p className="text-xs">{formatDate(review.reviewDate, {})}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
