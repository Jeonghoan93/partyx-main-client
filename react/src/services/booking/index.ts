import { Booking } from "src/interfaces/booking";
import api from "src/services/api";

export const getBookings = async (query: {
  eventId?: number;
  userId?: number;
  authorId?: number;
}) => {
  try {
    const res = await api.get("/bookings", { params: query });

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching bookings.");
  }
};

export const createBooking = async (dto: Booking) => {
  try {
    const res = await api.post("/bookings", dto);

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while creating a booking.");
  }
};

export const deleteBooking = async (bookingId: string) => {
  try {
    const res = await api.delete(`/bookings/${bookingId}`);

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while deleting a booking.");
  }
};
