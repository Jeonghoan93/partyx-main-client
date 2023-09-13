import { Types } from "mongoose";
import api from "../api";
import { CreateListingDTO } from "./dto";

export const createListing = async (data: CreateListingDTO) => {
  const token = localStorage.getItem("token");

  console.log("token from createListing: ", token);

  if (!token) {
    throw new Error("User is not authenticated.");
  }

  try {
    const res = await api.post("/listing", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while creating the listing.");
  }
};

export const getListingById = async (listingIdStr: string) => {
  const listingId = new Types.ObjectId(listingIdStr);

  try {
    const res = await api.get(`/listing/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching the listing.");
  }
};

export const getListings = async (query: any): Promise<any> => {
  try {
    const res = await api.get("/listing", { params: query });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching listings.");
  }
};

export const getListingsByCity = async (cityName: any): Promise<any> => {
  try {
    const res = await api.get("/listing/city", { params: cityName });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching listings.");
  }
};

export const getListingByType = async (eventType: string[]): Promise<any> => {
  try {
    const res = await api.get("/listing/type", { params: eventType });
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching listings.");
  }
};

export const getFavoriteListings = async () => {
  try {
    const res = await api.get("/listing/favorites");
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching favorite listings.");
  }
};

export const deleteFavoriteListing = async (listingId: Types.ObjectId) => {
  try {
    const res = await api.delete(`/listing/favorites/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while removing the favorite listing.");
  }
};

export const deleteListing = async (listingIdStr: string) => {
  const listingId = new Types.ObjectId(listingIdStr);

  try {
    const res = await api.delete(`/listing/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while deleting the listing.");
  }
};
