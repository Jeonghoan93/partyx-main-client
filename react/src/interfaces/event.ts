import { Booking } from "./booking";
import { Review } from "./review";

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Location {
  latlng: [number, number];
}

export interface Event {
  eventId: number;
  img: string;
  avgRating: number;
  reviewCounts: number;
  address: Address;
  location?: Location;

  title: string;
  minGuests: number;
  maxGuests: number;
  desc: string;
  offers: string[];
  startDate: Date;
  endDate: Date;
  eventType: string;

  currency: string;
  price: number;

  hostProfilePhoto: string;
  hostName: string;

  cancellationPolicy: string;
  eventRules: string[];
  safety: string[];
  createdAt: Date;
  updatedAt: Date;

  reviews: Review[];
  bookings?: Booking[];
}

export interface EventData {
  data: Event[];
  total: number;
}
