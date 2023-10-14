import { User } from "src/interfaces/user";

import { useLocation } from "react-router-dom";
import HeartButton from "src/Components/HeartButton";
import { isMatchingPath } from "src/utils/isMatchingPath";

interface PhotoSectionProps {
  img: string;
  eventId: number;
  currentUser?: User | null;
}

const EventPhoto: React.FC<PhotoSectionProps> = ({
  img,
  eventId,
  currentUser,
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");

  return (
    <section
      className="
          w-full h-[240px] object-cover relative
        "
    >
      <img
        src={img}
        className="w-full h-full object-cover shadow-md rounded-lg"
        alt="Image"
      />
      {!isEventDetailPage && (
        <HeartButton
          className="absolute top-2 right-2"
          eventId={eventId}
          currentUser={currentUser}
        />
      )}
    </section>
  );
};

export default EventPhoto;
