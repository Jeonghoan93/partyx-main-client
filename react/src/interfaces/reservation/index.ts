import { Types } from "mongoose";
import { Listing } from "src/interfaces/listing";
import { User } from "src/interfaces/user";

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
