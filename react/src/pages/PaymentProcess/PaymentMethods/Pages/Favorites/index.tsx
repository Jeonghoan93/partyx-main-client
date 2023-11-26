import EmptyState from "src/components/EmptyState";

import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useGetEventsByUserId from "src/hooks/useGetEventsByUserId";
import useLoginModal from "src/hooks/useLoginModal";
import FavoritesClient from "./Components/FavoritesClient";

const Favorites = () => {
  const currentUser = useCurrentUser();
  const events = useGetEventsByUserId(currentUser?.userId ?? null);
  const navigate = useNavigate();

  const loginModal = useLoginModal();

  if (!currentUser) {
    return (
      <Container>
        <div className="pb-6">
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
            <span className="text-gray-500">Favorites</span>
          </div>

          <div
            style={{ maxWidth: "500px" }}
            className="p-2 flex flex-col h-screen gap-6"
          >
            <h2 className="text-[24pt] font-bold">Favorites</h2>

            <div className="flex flex-col gap-2">
              <span className="text-[14pt] font-bold">
                Log in to view your favorites
              </span>
              <span className="text-[12pt] text-gray-600">
                You can view, edit and delete your favorites once you've logged
              </span>
            </div>

            <div style={{ maxWidth: "100px" }}>
              <Button label="Log in" onClick={loginModal.onOpen} />
            </div>
          </div>
        </div>
      </Container>
    );
  }

  if (currentUser) {
    return (
      <Container>
        <div className="p-3">
          <div className="mb-2">
            <h2 className="text-[16pt] font-bold">Favorites</h2>
            <span className="text-[11pt] text-gray-600 font-semibold">
              Click the heart icons to add events to your favorites!
            </span>
          </div>
          {events.length === 0 ? (
            <EmptyState
              title="No favorites found"
              subtitle="Looks like you have no favorite events."
            />
          ) : (
            <FavoritesClient events={events} currentUser={currentUser} />
          )}
        </div>
      </Container>
    );
  }
};

export default Favorites;
