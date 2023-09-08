import { Listing } from "src/types/listing";
import { Reservation } from "src/types/reservation";
import { User } from "src/types/user";

export type SafeListing = Omit<Listing, "createdAt" | "user"> & {
  createdAt: string;
  user: SafeUser;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type CloudinaryUploadResult = {
  asset_id: string;
  public_id: string;
  access_mode: string;
  api_key: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: boolean;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: string[];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};

export type UploadResponse = {
  status: "success" | "error";
  result?: CloudinaryUploadResult;
  error?: any;
};
