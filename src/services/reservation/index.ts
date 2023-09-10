import api from "src/services/api";
import { NewReservationPayload } from "src/types/reservation";

export const getReservations = async (query: {
  listingId?: string;
  userId?: string;
  authorId?: string;
}) => {
  try {
    const res = await api.get("/reservations", { params: query });

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while fetching reservations.");
  }
};

export const createReservation = async (dto: NewReservationPayload) => {
  try {
    const res = await api.post("/reservations", dto);

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while creating a reservation.");
  }
};

export const deleteReservation = async (reservationId: string) => {
  try {
    const res = await api.delete(`/reservations/${reservationId}`);

    return res.data;
  } catch (err) {
    throw new Error("An error occurred while deleting a reservation.");
  }
};
