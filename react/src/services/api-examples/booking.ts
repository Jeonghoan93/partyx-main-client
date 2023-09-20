import { Booking } from "src/interfaces/booking";
import { events } from "./events";

export const getMockedBookings = (eventId: number): Booking[] => {
  return [
    {
      bookingId: 1,
      bookingDate: new Date(),
      numberOfTickets: 2,
      currency: "USD",
      totalAmount: 100,
      event: events[eventId],
    },
  ];
};
