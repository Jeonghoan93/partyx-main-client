import { SafeUser } from "src/interfaces/user";

import { BiChevronLeft, BiLinkExternal } from "react-icons/bi";
import Container from "src/components/Container";
import HeartButton from "src/components/HeartButton";

interface NavbarProps {
  eventId: number;
  currentUser?: SafeUser | null;
}

const NavbarSection: React.FC<NavbarProps> = ({ currentUser, eventId }) => {
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
              <div className="cursor-pointer">
                <BiChevronLeft size={30} />
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

export default NavbarSection;
