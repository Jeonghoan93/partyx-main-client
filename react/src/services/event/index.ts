import { Types } from "mongoose";
import api from "../api";
import { CreateEventDTO } from "./dto";

export const createEvent = async (data: CreateEventDTO) => {
  const token = localStorage.getItem("token");

  console.log("token from createEvent: ", token);

  if (!token) {
    throw new Error("User is not authenticated.");
  }

  try {
    const res = await api.post("/event", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while creating the event.");
  }
};

export const getEventById = async (eventIdStr: string) => {
  const eventId = new Types.ObjectId(eventIdStr);

  try {
    const res = await api.get(`/event/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching the event.");
  }
};

export const getEvents = async (query: any): Promise<any> => {
  try {
    const res = await api.get("/event", { params: query });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching events.");
  }
};

export const getEventsByCity = async (cityName: any): Promise<any> => {
  try {
    const res = await api.get("/event/city", { params: cityName });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching events.");
  }
};

export const getEventByType = async (eventType: string[]): Promise<any> => {
  try {
    const res = await api.get("/event/type", { params: eventType });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching events.");
  }
};

export const getFavoriteEvents = async () => {
  try {
    const res = await api.get("/event/favorites");
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching favorite events.");
  }
};

export const deleteFavoriteEvent = async (eventId: Types.ObjectId) => {
  try {
    const res = await api.delete(`/event/favorites/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while removing the favorite event.");
  }
};

export const deleteEvent = async (eventId: number) => {
  try {
    const res = await api.delete(`/event/${eventId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while deleting the event.");
  }
};
