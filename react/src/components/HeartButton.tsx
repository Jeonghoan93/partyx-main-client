import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import useFavorite from "src/hooks/useFavorite";
import { SafeUser } from "src/interfaces/user";

interface HeartButtonProps {
  eventId: number;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({ eventId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    eventId,
    currentUser,
  });

  return (
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
  );
};

export default HeartButton;
