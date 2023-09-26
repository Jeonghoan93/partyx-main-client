import { useLocation, useNavigate } from "react-router-dom";
import HeartButton from "src/components/HeartButton";
import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";
import { formatDate } from "src/utils/formatDate";
import { isMatchingPath } from "src/utils/isMatchingPath";

type FestivalCardProps = {
  event: Event;
  containerStyle?: React.CSSProperties;
  currentUser?: User | null;
};

const FestivalCard: React.FC<FestivalCardProps> = ({
  event,
  containerStyle,
  currentUser,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isEventDetailPage = isMatchingPath(
    pathname,
    `/events/${event.eventId}`
  );

  return (
    <div
      style={containerStyle}
      className={"cursor-pointer"}
      onClick={() => navigate(`/events/${event.eventId}`)}
    >
      <div
        className="relative rounded-lg overflow-hidden bg-transparent"
        style={{
          height: "375px",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${event.img})`, // Use img from props
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Gradient */}
        <div
          className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-black opacity-70"
          style={{ height: "40%" }}
        ></div>
        {/* Content */}
        <div className="absolute w-full bottom-0 p-4" style={{ height: "37%" }}>
          <h3 className="text-white font-bold">{event.title}</h3>
          <p className=" text-gray-300 text-sm">
            {event.desc.length > 45
              ? event.desc.substring(0, 45) + "..."
              : event.desc}
          </p>
          <div className="flex text-red-50 font-serif text-[10pt] items-center mt-2">
            {formatDate(event.startDate, {
              timeIncluded: true,
              endDate: event.endDate,
            })}
          </div>
          <span className="text-white font-bold mt-2 block">
            {event.currency} {event.price}
          </span>
        </div>
        {/* Heart Button */}
        {!isEventDetailPage && (
          <HeartButton
            className={"absolute top-4 right-4"}
            eventId={event.eventId}
            currentUser={currentUser}
          />
        )}
      </div>
    </div>
  );
};

export default FestivalCard;
