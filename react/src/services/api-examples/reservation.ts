import { Types } from "mongoose";
import { Reservation } from "src/interfaces/reservation";
import { UserTypes } from "src/interfaces/user";
import { events } from "./events";

export const getMockedReservations = (eventId: number): Reservation[] => {
  return [
    {
      _id: new Types.ObjectId(),
      userId: 1,
      eventId: 1,
      startDate: new Date(),
      endDate: new Date(),
      currency: "USD",
      totalPrice: 100,
      createdAt: new Date(),
      user: {
        _id: new Types.ObjectId(),
        userId: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        hashedPassword: "hashedPasswordHere",
        createdAt: new Date(),
        updatedAt: new Date(),
        type: UserTypes.CUSTOMER,
      },
      event: events[eventId],
    },
  ];
};
