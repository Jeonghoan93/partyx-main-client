import { Types } from "mongoose";
import { Booking } from "src/interfaces/booking";
import { Address, Event } from "src/interfaces/event";
import { Review } from "./review";

export interface User {
  _id?: Types.ObjectId;
  userId: number;
  bio?: string;

  name: string;
  img?: string;

  email: string;
  hashedPassword: string;

  emailVerified?: Date;
  isEmailVerified?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  favoriteIds?: number[];

  events?: Event[];

  reviews?: Review[];

  phoneNumber?: string;
  address?: Address;
  bankDetails?: BankDetails;
  isHost?: boolean;
  listings?: Event[];
  bookings?: Booking[];
  notifications?: Notification[];

  userPreferences?: UserPreferences;

  savedEvents?: Event[];
  messages?: Message[];
  pastEventsAttended?: Event[];
}

export interface Message {
  sender: User;
  recipient: User;
  content: string;
  dateSent: Date;
  read: boolean;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  routingNumber?: string;
  IBAN?: string;
  BIC?: string;
}

export interface Notification {
  id: number;
  type: "message" | "booking" | "review" | "system";
  content: string;
  date: Date;
  read: boolean;
}

export interface UserPreferences {
  receiveNotifications: boolean;
  language: string;
}
