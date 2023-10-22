import Container from "src/components/Container";

import { useParams } from "react-router-dom";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export interface ReservationProps {
  reservationId: number;
}

const Reservation: React.FC = () => {
  const { reservationId: reservationIdString } = useParams<{
    reservationId: string;
  }>();

  const reservationId = Number(reservationIdString);

  return (
    <Container>
      <div
        className="
          pb-10
          max-w-screen-xl 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide reservationId={reservationId} />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide reservationId={reservationId} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reservation;
