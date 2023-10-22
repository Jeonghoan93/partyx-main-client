import { useEffect, useState } from "react";
import {
  ReservationStatusResponse,
  getReservationStatus,
} from "src/services/reservation";

interface ReservationStatusData {
  data?: ReservationStatusResponse;
  error?: any;
}

const useReservationStatus = (reservationId: string): ReservationStatusData => {
  const [statusData, setStatusData] = useState<ReservationStatusData>({});

  useEffect(() => {
    const fetchReservationStatus = async () => {
      try {
        const data = await getReservationStatus(reservationId);
        setStatusData({ data });
      } catch (error) {
        setStatusData({ error });
      }
    };

    fetchReservationStatus();
  }, [reservationId]);

  return statusData;
};

export default useReservationStatus;
