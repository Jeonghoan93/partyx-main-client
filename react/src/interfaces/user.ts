import { Types } from "mongoose";
import { Account } from "src/interfaces/account";
import { Listing } from "src/interfaces/listing";
import { Reservation } from "src/interfaces/reservation";

export enum UserTypes {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  hashedPassword: string;
  emailVerified?: Date;
  isEmailVerified?: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds?: Types.ObjectId[];
  accounts?: Account[];
  listings?: Listing[];
  reservations?: Reservation[];
  otp?: number;
  otpExpiryTime?: Date;
  type?: UserTypes;
  reviews?: string[];
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "favoriteIds"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  favoriteIds: string[];
};
