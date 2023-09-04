import { Types } from "mongoose";
import api from "../api";
import { CreateListingDTO, IListingsParams } from "./dto";

export const getListingById = async (listingIdStr: string) => {
  const listingId = new Types.ObjectId(listingIdStr);

  try {
    const res = await api.get(`/listing/${listingId}`);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching the listing.");
  }
};

export const getListings = async (query: IListingsParams) => {
  try {
    const res = await api.get("/listing", { params: query });
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

export const createListing = async (data: CreateListingDTO) => {
  try {
    const res = await api.post("/listing", data);
    return res.data;
  } catch (err) {
    throw new Error("An error occurred while creating the listing.");
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
