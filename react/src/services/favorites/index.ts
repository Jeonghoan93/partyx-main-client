import { Types } from "mongoose";
import api from "../api";

export const addToFavorites = async (eventIdStr: string) => {
  const eventId = new Types.ObjectId(eventIdStr);
  try {
    const res = await api.post(`/favorites/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while adding to favorites.");
  }
};

export const deleteFromFavorites = async (eventIdStr: string) => {
  const eventId = new Types.ObjectId(eventIdStr);
  try {
    const res = await api.delete(`/favorites/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while removing from favorites.");
  }
};
