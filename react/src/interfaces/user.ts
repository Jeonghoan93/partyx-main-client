import { Types } from "mongoose";
import { Booking } from "src/interfaces/booking";
import { Address, Event } from "src/interfaces/event";
import { Review } from "./review";

export enum UserTypes {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface User {
  _id: Types.ObjectId;
  userId: number;

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

  type?: UserTypes;

  reviews?: Review[];

  phoneNumber: string;
  address?: Address;
  bankDetails?: BankDetails;
  isHost: boolean;
  listings?: Event[];
  bookings?: Booking[];
  notifications: Notification[];

  userProfile?: UserProfile;
  userPreferences?: UserPreferences;

  savedEvents?: Event[];
  messages: Message[];
  pastEventsAttended?: Event[];
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "favoriteIds"
> & {
  createdAt?: string;
  updatedAt?: string;
  emailVerified?: string | null;
  favoriteIds?: number[];
};

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

export interface UserProfile {
  bio: string;
  profilePicture: string;
  verified: boolean;
  joinDate: Date;
  ratingsReceived: Review[];
}

export interface UserPreferences {
  receiveNotifications: boolean;
  language: string;
}
