import { Types } from "mongoose";
import { Event } from "src/interfaces/event";
import { SafeUser, User } from "src/interfaces/user";

export interface Reservation {
  _id: Types.ObjectId;
  userId: number;
  eventId: number;
  startDate: Date;
  endDate: Date;
  currency?: string;
  totalPrice: number;
  createdAt: Date;
  user: User;
  event: Event;
}

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "event" | "user"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  event: Event;
  user: SafeUser;
};

export type NewReservationPayload = Omit<SafeReservation, "_id">;
