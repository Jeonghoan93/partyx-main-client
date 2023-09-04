import { Types } from "mongoose";
import { User } from "src/types/user";

export interface Account {
  _id: Types.ObjectId;

  userId: Types.ObjectId;

  type: string;

  provider: string;

  providerAccountId: string;

  refresh_token?: string;

  access_token?: string;

  expires_at?: number;

  token_type?: string;

  scope?: string;

  id_token?: string;

  session_state?: string;

  user?: User;
}
