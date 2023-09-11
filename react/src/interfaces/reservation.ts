import { Types } from "mongoose";
import { Listing, SafeListing } from "src/interfaces/listing";
import { SafeUser, User } from "src/interfaces/user";

export interface Reservation {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  listingId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;
  user: User;
  listing: Listing;
}

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing" | "user"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
  user: SafeUser;
};

export type NewReservationPayload = Omit<SafeReservation, "_id">;
