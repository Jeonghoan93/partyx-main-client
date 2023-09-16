import { SafeUser } from "src/interfaces/user";

import { useLocation } from "react-router-dom";
import HeartButton from "src/components/HeartButton";
import { isMatchingPath } from "src/utils/isMatchingPath";

interface PhotoSectionProps {
  img: string;
  eventId: number;
  currentUser?: SafeUser | null;
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
         w-full h-40 object-cover
        "
    >
      <img src={img} style={{ width: "100%", height: "100%" }} alt="Image" />
      {!isEventDetailPage && (
        <div
          className="
            absolute
            top-3
            right-3
          "
        >
          <HeartButton eventId={eventId} currentUser={currentUser} />
        </div>
      )}
    </section>
  );
};

export default EventPhoto;
