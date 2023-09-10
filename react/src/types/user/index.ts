import { Types } from "mongoose";
import { Account } from "src/types/account";
import { Listing } from "src/types/listing";
import { Reservation } from "src/types/reservation";

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
