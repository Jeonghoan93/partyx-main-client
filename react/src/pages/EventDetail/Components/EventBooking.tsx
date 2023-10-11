import { useEffect, useState } from "react";
import Button from "src/components/Button";
import { formatDate } from "src/utils/formatDate";

interface EventBookingProps {
  price: number;
  currency: string;
  totalPrice: number;
  onSubmit: () => void;
  disabled?: boolean;
  startDate: Date;
  endDate: Date;
  minGuests: number;
  maxGuests: number;
}

const EventBooking: React.FC<EventBookingProps> = ({
  price,
  currency,
  onSubmit,
  disabled,
  startDate,
  endDate,
  minGuests,
  maxGuests,
}) => {
  const [guestCount, setGuestCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);

  useEffect(() => {
    setTotalPrice(price * guestCount);
  }, [guestCount, price]);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl border-[1px] border-neutral-200 overflow-hidden p-6">
        <div className="text-[14pt] flex flex-row items-center gap-1">
          <span className="text-[13pt] text-neutral-500 font-bold">From</span>
          <span className="text-[14pt] text-neutral-600">{currency}</span>
          <span className="text-[14pt] text-neutral-900 font-semibold">
            {price}
          </span>
        </div>

        <div className="flex flex-row justify-between items-center gap-2">
          <div>
            <label
              htmlFor="guestCount"
              className="font-medium text-neutral-600"
            >
              Guests:
            </label>
          </div>
          <div>
            <select
              id="guestCount"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="bg-neutral-100 border rounded-md p-1"
            >
              {[...Array(7)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <hr />

        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
        >
          <div>Total</div>
          <div>
            {currency} {totalPrice}
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <div>
            <Button
              disabled={disabled}
              label="Find ticket"
              onClick={onSubmit}
            />
          </div>

          <div className="cursor-pointer px-1 py-2 relative text-center">
            <span className="text-[11pt] underline text-neutral-800 font-semibold">
              Join with friends
            </span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">
              {" "}
              {formatDate(startDate, {
                timeIncluded: true,
                endDate: endDate,
              })}
            </h2>
          </div>

          <hr />

          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">
              {" "}
              {minGuests} - {maxGuests} guests
            </h2>
          </div>

          <hr />

          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">Who are coming?</h2>

            <div className="flex flex-row items-center mt-3">
              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/155"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/150"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/151"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/152"}
                />
              </span>

              <span>
                <img
                  className="rounded-full"
                  height="40"
                  width="40"
                  alt="Avatar"
                  src={"https://i.pravatar.cc/153"}
                />
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EventBooking;
