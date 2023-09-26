import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { User } from "src/interfaces/user";

import { useNavigate } from "react-router-dom";
import { addToFavorites, deleteFromFavorites } from "src/services/favorites";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  eventId: number;
  currentUser?: User | null;
}

const useFavorite = ({ eventId, currentUser }: IUseFavorite) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(eventId);
  }, [currentUser, eventId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        if (hasFavorited) {
          await addToFavorites(eventId);
        } else {
          await deleteFromFavorites(eventId);
        }

        navigate("/");
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, eventId, loginModal, navigate]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
