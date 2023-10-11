import { useLocation } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useHandleScroll from "src/hooks/useHandleScroll";
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

  const hideNav = useHandleScroll();

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");
  const isFavoritesPage = isMatchingPath(pathname, "/account/favorites");
  const isTicketsPage = isMatchingPath(pathname, "/account/activity");
  const isMessagesPage = isMatchingPath(pathname, "/account/messages");
  const isAccountPage = isMatchingPath(pathname, "/account");

  const currentUser = useCurrentUser();

  if (
    isAccountPage ||
    isEventDetailPage ||
    isFavoritesPage ||
    isTicketsPage ||
    isMessagesPage
  ) {
    return null;
  }

  return (
    <div
      className={`fixed w-full shadow pb-3 bg-white z-10 transition-transform duration-500 ${
        hideNav ? "-translate-y-full" : ""
      }`}
    >
      <div
        className="
          pt-3
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
            <div className="relative ml-2 mr-2">
              <Logo />
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
