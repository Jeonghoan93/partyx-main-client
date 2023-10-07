import { HiOutlineUserCircle } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useHandleScroll from "src/hooks/useHandleScroll";
import useLoginModal from "src/hooks/useLoginModal";
import { isMatchingPath } from "src/utils/isMatchingPath";
import Container from "../Container";
import Categories from "./Components/Categories";
import Logo from "./Components/Logo";
import Menus from "./Components/Menus";
import Search from "./Components/Search";
import UserMenu from "./Components/UserMenu";

const NavbarMobile: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const loginModal = useLoginModal();
  const hideNav = useHandleScroll();

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");
  const isFavoritesPage = isMatchingPath(pathname, "/favorites");
  const isTicketsPage = isMatchingPath(pathname, "/tickets");
  const isMessagesPage = isMatchingPath(pathname, "/messages");

  const currentUser = useCurrentUser();

  if (isEventDetailPage || isFavoritesPage || isTicketsPage || isMessagesPage) {
    return null;
  }

  return (
    <div
      className={`fixed w-full bg-white z-10 shadow-sm transition-transform duration-500 ${
        hideNav ? "-translate-y-full" : ""
      }`}
    >
      <div
        className="
          px-2
          pt-4 
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
            <Logo />
            <div className="cursor-pointer flex flex-row gap-1 items-center">
              <span>
                <HiOutlineUserCircle size={20} />
              </span>
              <span
                className="text-[10pt] font-semibold"
                onClick={loginModal.onOpen}
              >
                Sign in
              </span>
            </div>
          </div>
        </Container>
      </div>

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
            <div className="relative hidden md:block">
              <div className="flex flex-row">
                <Logo />
              </div>
            </div>
            <Search />
            <div className="relative hidden md:block">
              <div className="flex flex-row">
                <UserMenu currentUser={currentUser} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Categories />
      <Menus page={"/company"} menus={["Mission", "Arts", "Next Unicorn"]} />
      <Menus
        page={"/partner"}
        menus={["Club Owner", "Festival Organizer", "Rave Organizer"]}
      />
    </div>
  );
};

export default NavbarMobile;
