import { useLocation } from "react-router-dom";
import { User } from "src/interfaces/user";
import { isMatchingPath } from "src/utils/isMatchingPath";
import Container from "../Container";
import Categories from "./Components/Categories";
import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";
import Menus from "./Components/Menus";
import Search from "./Components/Search";
import UserMenu from "./Components/UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");

  if (isEventDetailPage) {
    return null;
  }

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
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
                <MainMenu currentUser={currentUser} />
              </div>
            </div>
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
      <Menus page={"/company"} menus={["Mission", "Careers", "Investors"]} />
      <Menus
        page={"/partner"}
        menus={["Club Owner", "Festival Organizer", "Rave Organizer"]}
      />
    </div>
  );
};

export default Navbar;
