import { User } from "./user";

export interface Review {
  rating: number;
  reviewId: number;
  reviewDesc: string;
  user?: User;
  reviewDate: Date;
}
