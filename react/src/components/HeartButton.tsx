import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "src/hooks/useFavorite";
import { User } from "src/interfaces/user";

interface HeartButtonProps {
  eventId: number;
  currentUser?: User | null;
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  eventId,
  currentUser,
  className,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    eventId,
    currentUser,
  });

  return (
    <div className={`${className}`}>
      <div
        onClick={toggleFavorite}
        className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
      >
        <AiOutlineHeart
          size={28}
          className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
        />
        <AiFillHeart
          size={24}
          className={hasFavorited ? "fill-gray-500" : "fill-neutral-400/70"}
        />
      </div>
    </div>
  );
};

export default HeartButton;
