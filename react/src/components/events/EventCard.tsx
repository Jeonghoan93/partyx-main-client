import { format } from "date-fns";
import { useCallback, useMemo } from "react";

import useCountries from "src/hooks/useCountries";

import { useNavigate } from "react-router-dom";
import { SafeEvent } from "src/interfaces/event";
import { SafeReservation } from "src/interfaces/reservation";
import { SafeUser } from "src/interfaces/user";
import Button from "../Button";
import HeartButton from "../HeartButton";

interface EventCardProps {
  data: SafeEvent;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const EventCard: React.FC<EventCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const navigate = useNavigate();
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue(data.location.value);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => navigate(`/events/${data._id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            style={{ width: "100%", height: "100%" }}
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Event"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton
              eventId={data._id.toString()}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location?.flag}, {location?.value}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
