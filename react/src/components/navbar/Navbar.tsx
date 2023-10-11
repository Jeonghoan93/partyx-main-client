import { useLocation } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import { isMatchingPath } from "src/utils/isMatchingPath";
import Container from "../Container";
import Categories from "./Components/Categories";
import Logo from "./Components/Logo";
import Menus from "./Components/Menus";
import Search from "./Components/Search";
import UserMenu from "./Components/UserMenu";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");
  const isBusinessPlanPage = isMatchingPath(pathname, "/business-plan");

  const currentUser = useCurrentUser();

  if (isEventDetailPage) {
    return null;
  }

  if (isBusinessPlanPage) {
    return null;
  }

  return (
    <div className="fixed w-full bg-white z-10 pb-3 shadow">
      <div
        className="
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
            <div className="relative hidden md:block">
              <div className="flex flex-row">
                <Logo />
              </div>
            </div>
            <Search />
            <UserMenu currentUser={currentUser} />
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

export default Navbar;
