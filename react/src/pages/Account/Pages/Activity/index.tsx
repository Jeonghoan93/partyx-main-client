import EmptyState from "src/Components/EmptyState";

import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Container from "src/Components/Container";
import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import TicketsClient from "./Components/TicketsClient";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Activity = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <Container>
        <div className="pb-3 text-gray-700 text-[10pt] font-semibold flex flex-row gap-1 items-center">
          <span
            onClick={() => navigate("/account")}
            className="hover:underline cursor-pointer"
          >
            Account
          </span>
          <span>
            <AiOutlineRight size={11} color={"gray"} />
          </span>
          <span className="text-gray-500">Activity</span>
        </div>

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
              <LeftSide />
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
  }

  return (
    <Container>
      <div className="p-3">
        <div className="mb-2">
          <h2 className="text-[16pt] font-bold">Tickets</h2>
          <span className="text-[11pt] text-gray-600 font-semibold">
            Click the ticket to see more details!
          </span>
        </div>
        {bookings.length === 0 ? (
          <EmptyState
            title="No ticket found"
            subtitle="Looks like you haven't reserved any ticket."
          />
        ) : (
          <TicketsClient bookings={bookings} currentUser={currentUser} />
        )}
      </div>
    </Container>
  );
};

export default Activity;
