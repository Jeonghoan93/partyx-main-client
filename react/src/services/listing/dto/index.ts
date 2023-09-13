import { SafeListing } from "src/interfaces/listing";

export interface IListingsParams {
  userId?: string;
  minGuests?: number;
  maxGuests?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
  featured?: boolean;
}

export interface IListingsReturn {
  data: IListingsParams[];
  total: number;
  limit: number;
}

export interface SafeListingReturn {
  data: SafeListing[];
  total: number;
  limit: number;
}

export interface CreateListingDTO {
  category: string;
  location: {
    flag: string;
    label: string;
    latlng: [number, number];
    region: string;
    value: string;
  };
  maxGuests: number;
  minGuests: number;
  imageSrc: string;
  description: string;
  eventDate: string;
  eventTime: {
    hour: number;
    minute: number;
  };
  title: string;
  price: string;
}
