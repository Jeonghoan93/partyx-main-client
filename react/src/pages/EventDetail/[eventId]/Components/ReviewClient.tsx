import { AiFillHeart } from "react-icons/ai";
import { Event } from "src/interfaces/event";
import Reviews from "./Reviews";

interface EventClientProps {
  event: Event;
}

const ReviewClient: React.FC<EventClientProps> = ({ event }) => {
  return (
    <section className="mt-3">
      <div className="mb-2 flex flex-col">
        <span className="flex flex-row items-center text-[13pt] font-bold">
          <span className="mr-1">
            {" "}
            <AiFillHeart size={16} />
          </span>
          <span>
            {event.avgRating} · {event.reviewCounts} reviews
          </span>
        </span>
        <span className="text-[11pt] text-gray-600 font-semibold">
          What people say about this event
        </span>
      </div>
      <Reviews reviews={event.reviews} />
    </section>
  );
};

export default ReviewClient;
