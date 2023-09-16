import { useNavigate } from "react-router-dom";
import { Event } from "src/interfaces/event";
import { formatDate } from "src/utils/formatDate";

type FestivalCardProps = {
  event: Event;
  containerStyle: React.CSSProperties;
};

const FestivalCard: React.FC<FestivalCardProps> = ({
  event,
  containerStyle,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={event.eventId}
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
            {formatDate(event.startDate, true, event.endDate)}
          </div>
          <span className="text-white font-bold mt-2 block">
            {event.currency} {event.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard;
