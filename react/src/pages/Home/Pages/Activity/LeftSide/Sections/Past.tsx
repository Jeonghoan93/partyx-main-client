import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useUpcomingPastModal from "src/hooks/useUpcomingPastModal";
import TicketsClient from "../../Components/TicketsClient";

const Past = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);
  const upcomingPastModal = useUpcomingPastModal();

  return (
    <div className="py-3 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-[15pt]">Past</span>
          <span
            onClick={() => upcomingPastModal.onOpen("past")}
            className="cursor-pointer font-bold text-[10pt] text-gray-00"
          >
            Show all
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
