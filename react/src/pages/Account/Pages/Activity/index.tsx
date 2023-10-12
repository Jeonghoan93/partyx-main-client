import EmptyState from "src/components/EmptyState";

import { AiOutlineArrowRight, AiOutlineRight } from "react-icons/ai";
import { LuSettings2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import Container from "src/components/Container";
import LineContainer from "src/components/LineContainer";
import { useBookings } from "src/hooks/useBookings";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import TicketsClient from "./Components/TicketsClient";

const Activity = () => {
  const currentUser = useCurrentUser();
  const bookings = useBookings(currentUser?.userId ?? null);
  const loginModal = useLoginModal();
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <Container>
        <div className="pb-6 h-screen">
          <div className="pb-6 text-gray-700 text-[10pt] font-semibold flex flex-row gap-1 items-center">
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

          <div style={{ maxWidth: "500px" }} className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[15pt]">Upcoming</span>

              <LineContainer>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-800">
                    You have no upcoming tickets
                  </span>

                  <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer flex flex-row items-center gap-1"
                  >
                    <span className="font-semibold text-[11pt]">
                      Find a party
                    </span>
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </div>
                </div>
              </LineContainer>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <span className="font-bold text-[15pt]">Past</span>
                <span
                  onClick={() => alert("Not yet!")}
                  className="cursor-pointer"
                >
                  <LuSettings2 size={18} />
                </span>
              </div>

              <span className="text-gray-700">
                You don't have recent activity
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div style={{ maxWidth: "300px" }}>
                <Button
                  label="Log in to view your bookings"
                  onClick={loginModal.onOpen}
                />
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
