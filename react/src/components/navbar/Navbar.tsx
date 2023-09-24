import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import { isMatchingPath } from "src/utils/isMatchingPath";
import Container from "../Container";
import Categories from "./Components/Categories";
import Logo from "./Components/Logo";
import MainMenu from "./Components/MainMenu";
import Menus from "./Components/Menus";
import Search from "./Components/Search";
import UserMenu from "./Components/UserMenu";

const Navbar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const loginModal = useLoginModal();

  const navigate = useNavigate();

  const isEventDetailPage = isMatchingPath(pathname, "/events/:eventId");
  const isBusinessPlanPage = isMatchingPath(pathname, "/business-plan");

  const currentUser = useCurrentUser();

  if (isEventDetailPage) {
    return null;
  }

  if (isBusinessPlanPage) {
    return (
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div
          className="
          py-5 
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
                className="flex flex-row items-center gap-2 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <span>
                  <BiArrowBack />
                </span>
                <span className="text-[11pt] font-semibold underline">
                  Back
                </span>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row items-center gap-3">
                  <div
                    className="
              
        
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
                  >
                    <div
                      className="flex flex-row items-center gap-2"
                      onClick={loginModal.onOpen}
                    >
                      <span className="underline">Login to try out</span>
                    </div>
                  </div>

                  <div
                    onClick={() => navigate("/company?menu=Mission")}
                    className="
            hidden
            lg:block
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
                  >
                    <span className="underline">About this company</span>
                  </div>
                </div>
              </div>
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
