export interface Review {
  rating: number;
  reviewId: number;
  reviewDesc: string;
  user: {
    img: string;
    name: string;
  };
  reviewDate: Date;
}
