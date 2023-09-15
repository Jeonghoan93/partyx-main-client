import { Types } from "mongoose";
import { Event, SafeEvent } from "src/interfaces/event";
import { SafeUser, User } from "src/interfaces/user";

export interface Reservation {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  eventId: Types.ObjectId;
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
  event: SafeEvent;
  user: SafeUser;
};

export type NewReservationPayload = Omit<SafeReservation, "_id">;
