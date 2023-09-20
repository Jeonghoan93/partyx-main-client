import { Types } from "mongoose";
import { User } from "src/interfaces/user";

export const MockedUser: User = {
  _id: new Types.ObjectId(),
  userId: 1,
  name: "Sample User",
  email: "sample@example.com",
  hashedPassword: "hashedPasswordSample",
  isEmailVerified: false,
  phoneNumber: "123-456-7890",
  isHost: false,
  notifications: [
    {
      id: 1,
      type: "message",
      content: "Sample Notification",
      date: new Date(),
      read: false,
    },
  ],
  messages: [],
  userPreferences: {
    receiveNotifications: true,
    language: "English",
  },
};
