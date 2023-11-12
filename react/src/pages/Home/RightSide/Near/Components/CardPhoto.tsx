import { User } from "src/interfaces/user";

interface PhotoSectionProps {
  img: string;
  eventId: number;
  currentUser?: User | null;
}

const CardPhoto: React.FC<PhotoSectionProps> = ({ img }) => {
  return (
    <section
      className="
          w-full h-[105px] object-cover relative
        "
    >
      <img
        src={img}
        className="w-full h-full object-cover shadow-md rounded-lg"
        alt="Image"
      />
    </section>
  );
};

export default CardPhoto;
