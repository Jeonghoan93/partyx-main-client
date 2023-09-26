import { Types } from "mongoose";
import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";

export interface Booking {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  eventId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;
  user: User;
  event: Event;
}
