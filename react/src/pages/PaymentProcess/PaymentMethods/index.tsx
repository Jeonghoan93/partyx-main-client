import { differenceInDays } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { Range } from "react-date-range";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Container from "src/components/Container";
import { useCurrentEvent } from "src/hooks/useCurrentEvent";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import { createBooking } from "src/services/reservation";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const PaymentMethods: React.FC = () => {
  const loginModal = useLoginModal();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  const { eventId } = useParams<{ eventId: string }>();
  const { eventData } = useCurrentEvent(Number(eventId));

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(eventData?.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateBooking = useCallback(async () => {
    setIsPaymentProcessing(true);

    if (!currentUser) {
      return loginModal.onOpen();
    }

    if (!dateRange.startDate || !dateRange.endDate) {
      // Handle this case - maybe show a toast or set default values
      toast.error("Start date or end date is not defined.");
      return;
    }

    try {
      const res = await createBooking({
        totalAmount: totalPrice || 0,
        event: {
          ...eventData,
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
        navigate("/account/activity");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      () => navigate("/payment-gateway/confirmation");
      setIsPaymentProcessing(false);
    }
  }, [
    currentUser,
    dateRange.startDate,
    dateRange.endDate,
    loginModal,
    totalPrice,
    eventData,
    navigate,
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && eventData?.price) {
        setTotalPrice(dayCount * eventData?.price);
      } else {
        setTotalPrice(eventData?.price);
      }
    }
  }, [dateRange, eventData?.price]);

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
          <section className="w-full h-[12vh] overflow-hidden relative rounded-lg">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[21pt]">Payment method</span>

              <span className="font-semibold text-[13pt]">
                Choose your preferred payment method. We’ll save your preference
                for next time.
              </span>
            </div>
          </section>
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide
              onSubmit={onCreateBooking}
              isLoading={isPaymentProcessing}
            />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaymentMethods;
