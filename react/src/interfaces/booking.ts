import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";

export interface Booking {
  bookingId: number;

  bookBy?: User | null;
  bookingDate: Date;
  numberOfTickets: number;

  currency: string;
  totalAmount: number;

  event: Event;
}
