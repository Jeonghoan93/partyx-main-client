import { User } from "src/interfaces/user";

import { BiChevronLeft, BiLinkExternal } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Container from "src/Components/Container";
import HeartButton from "src/Components/HeartButton";

interface NavbarProps {
  eventId: number;
  currentUser?: User | null;
}

const NavbarEventDetail: React.FC<NavbarProps> = ({ currentUser, eventId }) => {
  const navigate = useNavigate();

  if (eventId) {
    return (
      <div className="fixed top-0 w-full bg-white z-10 shadow-sm">
        <div
          className="
          py-4
          border-b-[1px]
        "
        >
          <Container>
            <div
              className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
            >
              <div
                onClick={() => navigate(-1)}
                className="cursor-pointer flex flex-row items-center gap-1"
              >
                <span className="">
                  <BiChevronLeft size={30} />
                </span>
                <span className="text-[11pt] font-bold text-gray-800">
                  Back
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <span className="cursor-pointer">
                  <BiLinkExternal />
                </span>
                <span>
                  <HeartButton currentUser={currentUser} eventId={eventId} />
                </span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
};

export default NavbarEventDetail;
