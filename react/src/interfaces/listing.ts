import { Types } from "mongoose";
import { Reservation } from "./reservation";
import { SafeUser, User } from "./user";

export interface Listing {
  _id: Types.ObjectId;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: Date;
  category: string;
  maxGuests: number;
  minGuests: number;
  location: any;
  eventDate: string; // or Date if you adjust it in the backend
  eventTime: {
    hour: number;
    minute: number;
  };
  price: number;
  userId: Types.ObjectId;
  user?: User;
  reservations?: Reservation[];
}

export type SafeListing = Omit<Listing, "createdAt" | "user"> & {
  createdAt: string;
  user: SafeUser;
};
