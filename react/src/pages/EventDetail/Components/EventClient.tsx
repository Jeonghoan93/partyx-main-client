import { differenceInDays, eachDayOfInterval } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";
import { Event } from "src/interfaces/event";
import { Reservation } from "src/interfaces/reservation";
import { SafeUser } from "src/interfaces/user";
import { createReservation } from "src/services/reservation";
import EventInfo from "./EventInfo";
import EventReservation from "./EventReservation";
import PhotoSection from "./PhotoSection";
import ReviewSection from "./ReviewSection";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface EventClientProps {
  reservations?: Reservation[];
  event: Event;
  currentUser?: SafeUser | null;
}

const EventClient: React.FC<EventClientProps> = ({
  event,
  reservations = [],
  currentUser,
}) => {
  const loginModal = useLoginModal();
  const navigate = useNavigate();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: Reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(event.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    if (!dateRange.startDate || !dateRange.endDate) {
      // Handle this case - maybe show a toast or set default values
      toast.error("Start date or end date is not defined.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await createReservation({
        totalPrice,
        startDate: dateRange.startDate?.toISOString(),
        endDate: dateRange.endDate?.toISOString(),
        eventId: event.eventId,
        userId: currentUser.userId,
        createdAt: new Date().toISOString(),
        event: event,
        user: currentUser,
      });

      if (res?.status === "success") {
        toast.success("Event reserved!");
        setDateRange(initialDateRange);
        navigate("/tickets");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }, [
    currentUser,
    dateRange.startDate,
    dateRange.endDate,
    loginModal,
    totalPrice,
    event,
    navigate,
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && event.price) {
        setTotalPrice(dayCount * event.price);
      } else {
        setTotalPrice(event.price);
      }
    }
  }, [dateRange, event.price]);

  return (
    <Container>
      <div
        className="
          mt-[-22pt]
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-4">
          <PhotoSection img={event.img} />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              p-1
            "
          >
            <EventInfo
              title={event.title}
              hostName={event.hostName}
              hostProfilePhoto={event.hostProfilePhoto}
              desc={event.desc}
              minGuests={event.minGuests}
              maxGuests={event.maxGuests}
              startDate={event.startDate}
              endDate={event.endDate}
              address={event.address}
            />
            <div
              className="
                mt-4
                md:order-last 
                md:col-span-3
              "
            >
              <EventReservation
                currency={event.currency}
                price={event.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
          <ReviewSection event={event} />
        </div>
      </div>
    </Container>
  );
};

export default EventClient;
