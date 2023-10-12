import { User } from "src/interfaces/user";

import { useLocation } from "react-router-dom";
import HeartButton from "src/components/HeartButton";
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
         w-full h-[300px] object-cover
        "
    >
      <img src={img} style={{ width: "100%", height: "100%" }} alt="Image" />
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
