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

export const mockedUserData = {
  status: "success",
  message: "User logged in successfully",
  result: {
    token: "mocked-token-value",
    user: {
      _id: "6512c66fdbdbd632d31fbc95",
      name: "jimmy",
      email: "test71@email.com",
      bookings: [],
      events: [],
      favoriteIds: [],
      hashedPassword: "mocked-hash-value",
      isEmailVerified: false,
      listings: [],
      messages: [],
      notifications: [],
      pastEventsAttended: [],
      reviews: [],
      savedEvents: [],
      __v: 0,
    },
  },
};
