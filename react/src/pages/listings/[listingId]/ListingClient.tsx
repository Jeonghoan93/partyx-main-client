import { differenceInDays, eachDayOfInterval } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { toast } from "react-hot-toast";
import { GiAbstract001 } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import ListingHead from "src/components/listings/ListingHead";
import ListingInfo from "src/components/listings/ListingInfo";
import ListingReservation from "src/components/listings/ListingReservation";
import categories from "src/components/navbar/Components/Categories";
import useLoginModal from "src/hooks/useLoginModal";
import { SafeListing } from "src/interfaces/listing";
import { SafeReservation } from "src/interfaces/reservation";
import { SafeUser } from "src/interfaces/user";
import { createReservation } from "src/services/reservation";
import { Category } from "src/utils/constants";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser,
}) => {
  const loginModal = useLoginModal();
  const navigate = useNavigate();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: SafeReservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const category = useMemo(() => {
    if (categories instanceof Array) {
      return categories.find(
        (item: Category) => item.label === listing.category
      );
    } else {
      return {
        label: "Unknown",
        icon: GiAbstract001,
        description: "No description available",
      };
    }
  }, [listing.category]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
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
        listingId: listing._id,
        userId: currentUser._id,
        createdAt: new Date().toISOString(),
        listing: listing,
        user: currentUser,
      });

      if (res?.status === "success") {
        toast.success("Listing reserved!");
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
    listing,
    navigate,
  ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.location}
            id={listing._id.toString()}
            currentUser={currentUser}
          />
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              minGuests={listing.minGuests}
              maxGuests={listing.maxGuests}
              eventDate={listing.eventDate}
              location={listing.location}
              eventTime={listing.eventTime}
            />
            <div
              className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;