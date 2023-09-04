import { Types } from "mongoose";
import { Account } from "src/types/account";
import { Listing } from "src/types/listing";
import { Reservation } from "src/types/reservation";

export interface User {
  _id: Types.ObjectId;

  name?: string;

  email?: string;

  emailVerified?: Date;

  image?: string;

  hashedPassword?: string;

  createdAt: Date;

  updatedAt: Date;

  favoriteIds: Types.ObjectId[];

  accounts?: Account[];

  listings?: Listing[];

  reservations?: Reservation[];
}
