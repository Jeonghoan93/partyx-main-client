import { LuSettings2 } from "react-icons/lu";
import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import TicketsClient from "../../Components/TicketsClient";

const Past = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);

  return (
    <div className="py-3 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[15pt]">Past</span>
          <span onClick={() => alert("Not yet!")} className="cursor-pointer">
            <LuSettings2 size={18} />
          </span>
        </div>

        {bookings.length === 0 ? (
          <span className="text-gray-700"> You don't have recent activity</span>
        ) : (
          <TicketsClient bookings={bookings} currentUser={currentUser} />
        )}
      </div>
    </div>
  );
};

export default Past;
