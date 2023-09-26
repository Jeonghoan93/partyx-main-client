import { differenceInDays } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Range } from "react-date-range";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import useLoginModal from "src/hooks/useLoginModal";
import { Booking } from "src/interfaces/booking";
import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";
import { createBooking } from "src/services/booking";
import EventBooking from "./EventBooking";
import EventInfo from "./EventInfo";
import PhotoSection from "./PhotoSection";
import ReviewSection from "./ReviewSection";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface EventClientProps {
  bookings?: Booking[];
  event: Event;
  currentUser?: User | null;
}

const EventClient: React.FC<EventClientProps> = ({ event, currentUser }) => {
  const loginModal = useLoginModal();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(event.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateBooking = useCallback(async () => {
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
      const res = await createBooking({
        totalAmount: totalPrice,
        event: {
          ...event,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
        },
        bookBy: currentUser,
        bookingDate: new Date(),
        bookingId: 0,
        numberOfTickets: 0,
        currency: "",
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
              md:gap-3 
            "
          >
            <EventInfo
              title={event.title}
              hostName={event.hostName}
              hostProfilePhoto={event.hostProfilePhoto}
              desc={event.desc}
              address={event.address}
            />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <EventBooking
                currency={event.currency}
                price={event.price}
                totalPrice={totalPrice}
                onSubmit={onCreateBooking}
                disabled={isLoading}
                startDate={event.startDate}
                endDate={event.endDate}
                minGuests={event.minGuests}
                maxGuests={event.maxGuests}
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
