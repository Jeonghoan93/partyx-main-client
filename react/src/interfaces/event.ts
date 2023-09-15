import { Review } from "./review";
import { SafeUser } from "./user";

export interface Address {
  street: string;
  postalCode: string;
  area: string;
  city: string;
  country: string;
}

export interface Event {
  eventId: number;
  img: string;
  avgRating: number;
  reviewCounts: number;
  address: Address;
  title: string;
  minGuests: number;
  maxGuests: number;
  desc: string;
  offers: string[];
  startDate: Date;
  endDate: Date;
  eventType: string;
  reviews: Review[];
  currency: string;
  price: number;
  hostName: string;
  hostProfilePhoto: string;
  cancellationPolicy: string;
  eventRules: string[];
  safety: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EventData {
  data: Event[];
  total: number;
}

export type SafeEvent = Omit<Event, "createdAt" | "user"> & {
  createdAt: string;
  user: SafeUser;
};
