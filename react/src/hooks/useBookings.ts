import { useEffect, useState } from "react";
import { getBookings } from "src/services/booking";

export function useBookings(userId: number | null) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      if (userId) {
        const userBookings = await getBookings({ userId });
        setBookings(userBookings);
      }
    }

    fetchBookings();
  }, [userId]);

  return bookings;
}
