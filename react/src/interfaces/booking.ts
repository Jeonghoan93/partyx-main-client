import { Event } from "src/interfaces/event";
import { SafeUser, User } from "src/interfaces/user";

export interface Booking {
  bookingId: number;

  bookBy?: User;
  bookingDate: Date;
  numberOfTickets: number;

  currency: string;
  totalAmount: number;

  event: Event;
}

export type SafeBooking = Omit<
  Booking,
  "createdAt" | "startDate" | "endDate" | "event" | "user"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  event: Event;
  user: SafeUser;
};

export type NewBookingPayload = Omit<SafeBooking, "_id">;
