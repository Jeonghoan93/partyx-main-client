import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "src/types/user";

import { useNavigate } from "react-router-dom";
import { addToFavorites, deleteFromFavorites } from "src/services/favorites";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const navigate = useNavigate();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        if (hasFavorited) {
          await addToFavorites(listingId);
        } else {
          await deleteFromFavorites(listingId);
        }

        navigate("/");
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, navigate]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
