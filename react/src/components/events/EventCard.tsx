import { useCallback, useMemo } from "react";

import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Booking } from "src/interfaces/booking";
import { Event } from "src/interfaces/event";
import { User } from "src/interfaces/user";
import { formatDate } from "src/utils/formatDate";
import Button from "../Button";
import HeartButton from "../HeartButton";

interface EventCardProps {
  data: Event;
  booking?: Booking;
  onAction?: (id: number) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: number;
  currentUser?: User | null;
}

const EventCard: React.FC<EventCardProps> = ({
  data,
  booking,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
}) => {
  const navigate = useNavigate();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      if (actionId === undefined) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (booking) {
      return booking.totalAmount;
    }

    return data.price;
  }, [booking, data.price]);

  return (
    <div
      onClick={() => navigate(`/events/${data.eventId}`)}
      className="mb-2 col-span-1 cursor-pointer group"
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
            src={data.img}
            alt="Event"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton eventId={data.eventId} currentUser={currentUser} />
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center">
            <div className="font-semibold text-[12pt]">
              {data.title.length > 18
                ? `${data.title.slice(0, 18)}...`
                : data.title}
            </div>
            <div className="flex flex-row items-center gap-1">
              <span>
                <AiFillHeart size={16} />
              </span>
              <span className="font-normal text-[12pt]">{data.avgRating}</span>
            </div>
          </div>

          <div className="font-normal text-[11pt]"> {data.address.city}</div>
          <div className="font-normal text-[11pt] text-neutral-800">
            {formatDate(data.startDate, {
              timeIncluded: true,
              endDate: data.endDate,
            })}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">
              {data.currency} {price}
            </div>
            {!booking && <div className="font-light">{""}</div>}
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
    </div>
  );
};

export default EventCard;
