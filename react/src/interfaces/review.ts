import { Types } from "mongoose";

export interface Review {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  eventId?: Types.ObjectId | null;
  rating: number;
  text: string;
}
