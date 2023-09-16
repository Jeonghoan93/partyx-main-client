import { SafeUser } from "src/interfaces/user";

import HeartButton from "src/components/HeartButton";

interface PhotoSectionProps {
  title: string;
  img: string;
  eventId: number;
  currentUser?: SafeUser | null;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({
  img,
  eventId,
  currentUser,
}) => {
  return (
    <section
      className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
    >
      <img
        src={img}
        style={{ width: "100%", height: "100%" }}
        className="object-cover w-full"
        alt="Image"
      />
      <div
        className="
            absolute
            top-5
            right-5
          "
      >
        <HeartButton eventId={eventId} currentUser={currentUser} />
      </div>
    </section>
  );
};

export default PhotoSection;
