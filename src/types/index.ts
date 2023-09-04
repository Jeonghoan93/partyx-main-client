import { Listing } from "src/types/listing";
import { Reservation } from "src/types/reservation";
import { User } from "src/types/user";

export type SafeListing = Omit<Listing, "createdAt" | "user"> & {
  createdAt: string;
  user: SafeUser;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
