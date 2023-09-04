import { Types } from "mongoose";
import { Reservation } from "src/types/reservation";
import { User } from "src/types/user";

export interface Listing {
  _id: Types.ObjectId;

  title: string;

  description: string;

  imageSrc: string;

  createdAt: Date;

  category: string;

  roomCount: number;

  bathroomCount: number;

  guestCount: number;

  locationValue: string;

  userId: Types.ObjectId;

  price: number;

  user?: User;

  reservations?: Reservation[];
}
