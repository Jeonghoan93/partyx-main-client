import { Types } from "mongoose";

export enum PaymentStatus {
  PENDING = "pending",
  PAID = "paid",
  FAILED = "failed",
}

export enum TicketStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

export interface TicketedItems {
  eventId: string;
  quantity: number;
  skuCode: string;
  price: number;
  refundable: boolean;
  validity: number;
  skuPriceId: string;
  eventName: string;
  licenses: string[];
}

export interface Ticket {
  _id: Types.ObjectId;
  eventId: Types.ObjectId;
  userId: Types.ObjectId;
  purchaseDate: Date;
  price: number;
  customerAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
  };
  customerPhoneNumber: string;
  ticketedItems: TicketedItems[];
  paymentInfo: {
    paymentMethod: string;
    paymentStatus: PaymentStatus;
    paymentAmount: number;
    paymentDate: Date;
    paymentIntentId: string;
  };
  ticketStatus: TicketStatus;
  isTicketIssued: boolean;
  checkoutSessionId: string;
}
