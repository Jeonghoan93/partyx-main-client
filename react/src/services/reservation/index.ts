import { Booking } from "src/interfaces/booking";
import api from "src/services/api";

export interface ReservationStatusResponse {
  status: "Pending" | "Confirmed";
  message: string;
}

export const getReservationStatus = async (
  reservationId: string
): Promise<ReservationStatusResponse> => {
  try {
    const response = await api.get(`/reservations/${reservationId}/status`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch reservation status:", error);
    throw error; // throw the error to be caught by the consuming function or component
  }
};

export const getReservationId = async (userId: number): Promise<string> => {
  try {
    const response = await api.get(`/reservations/${userId}/reservationId`);
    return response.data.reservationId;
  } catch (error) {
    throw new Error("Failed to fetch reservation ID.");
  }
};

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
