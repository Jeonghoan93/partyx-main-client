import { Types } from "mongoose";
import { SafeUser, UserTypes } from "src/interfaces/user";

export const MockedUser: SafeUser = {
  _id: new Types.ObjectId(),
  userId: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  hashedPassword: "hashedPasswordHere",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  type: UserTypes.CUSTOMER,
};
