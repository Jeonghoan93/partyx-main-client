import { AiFillHeart } from "react-icons/ai";
import { Event } from "src/interfaces/event";
import Reviews from "./Components/Reviews";

interface EventClientProps {
  event: Event;
}

const ReviewSection: React.FC<EventClientProps> = ({ event }) => {
  return (
    <section className="mt-3 p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
      <div className="flex flex-col">
        <div className="flex flex-row items-center text-[13pt] font-bold">
          <span className="mr-1">
            {" "}
            <AiFillHeart size={16} />
          </span>
          <span>
            {event.avgRating} · {event.reviewCounts} reviews
          </span>
        </div>
        <span className="text-[11pt] text-gray-600 font-semibold">
          What people say about this event
        </span>
      </div>
      <Reviews reviews={event.reviews} />
    </section>
  );
};

export default ReviewSection;
