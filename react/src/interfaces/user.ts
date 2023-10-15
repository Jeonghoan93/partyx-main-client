import { Booking } from "src/interfaces/booking";
import { Address, Event } from "src/interfaces/event";
import { Review } from "./review";

export interface User {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  desc: string;
  img: string;
  photos?: string[];
  gender: "male" | "female" | "other";
  birthday: Birthday;
  height: number;
  notifications?: Notifications;
  connectedAccounts?: ConnectedAccounts;
  isHost?: boolean;
  hashedPassword: string;
  bio?: string;
  role?: string;

  address?: Address;

  status?: "active" | "inactive" | "suspended";
  lastLogin?: Date;
  emailVerified?: Date;
  isEmailVerified?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
  favoriteIds?: number[];

  events?: Event[];
  reviews?: Review[];
  bankDetails?: BankDetails;
  listings?: Event[];
  bookings?: Booking[];
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

export interface Birthday {
  year: number;
  month: number;
  day: number;
}

interface Notifications {
  email: boolean;
  web: boolean;
}

interface ConnectedAccounts {
  facebook: boolean;
  apple: boolean;
  instagram: boolean;
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
