import { Types } from "mongoose";
import api from "../api";

export const addToFavorites = async (listingIdStr: string) => {
  const listingId = new Types.ObjectId(listingIdStr);
  try {
    const res = await api.post(`/favorites/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while adding to favorites.");
  }
};

export const deleteFromFavorites = async (listingIdStr: string) => {
  const listingId = new Types.ObjectId(listingIdStr);
  try {
    const res = await api.delete(`/favorites/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while removing from favorites.");
  }
};
