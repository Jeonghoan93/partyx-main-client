import api from "../api";

export const addToFavorites = async (eventId: number) => {
  try {
    const res = await api.post(`/favorites/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while adding to favorites.");
  }
};

export const deleteFromFavorites = async (eventId: number) => {
  try {
    const res = await api.delete(`/favorites/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while removing from favorites.");
  }
};
