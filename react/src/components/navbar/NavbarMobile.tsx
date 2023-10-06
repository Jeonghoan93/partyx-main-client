import { BiUserCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
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

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");

  const currentUser = useCurrentUser();

  if (isEventDetailPage) {
    return null;
  }

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
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
                <BiUserCircle />
              </span>
              <span onClick={loginModal.onOpen}>Sign in</span>
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
