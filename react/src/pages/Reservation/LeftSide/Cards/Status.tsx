import { BsCheckLg } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { useParams } from "react-router-dom";
import EmptyState from "src/components/EmptyState";
import LineContainer from "src/components/LineContainer";
import useReservationStatus from "src/hooks/useReservationStatus";
import ReservationStatusCard from "../../Components/ReservationStatusCard";

const Status = () => {
  const { reservationId } = useParams<{ reservationId: string }>();

  const reservationStatus = useReservationStatus(reservationId || "");

  if (reservationId && reservationStatus.error) {
    return (
      <EmptyState
        title={"Reservation Status"}
        subtitle={"Something went wrong"}
      />
    );
  }

  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <span className="font-bold">Status</span>

        {reservationStatus.data?.status === "Confirmed" && (
          <ReservationStatusCard
            status={"Confirmed"}
            icon={<BsCheckLg size={14} />}
            message={"You are ready to go!"}
          />
        )}

        {reservationStatus.data?.status === "Pending" && (
          <ReservationStatusCard
            status={"Pending"}
            icon={<CiTimer size={14} />}
            message={"Awaiting for the host to accept"}
          />
        )}
      </section>
    </LineContainer>
  );
};

export default Status;
