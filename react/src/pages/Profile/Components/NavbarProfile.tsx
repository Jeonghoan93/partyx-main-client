import { BiChevronLeft, BiLinkExternal } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import Container from "src/components/Container";
import { User } from "src/interfaces/user";
import { users } from "src/services/api-examples/user";

const NavbarProfile: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  // const event = getEventById(params.eventId);
  const userData = users.find((user: User) => user.userId === Number(userId));

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
              className="cursor-pointer flex flex-row  items-center gap-1"
            >
              <span className="">
                <BiChevronLeft size={30} />
              </span>
              <span className="text-[11pt] font-bold text-gray-700">
                {userData?.firstName || "Profile"}
              </span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="cursor-pointer">
                <BiLinkExternal />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavbarProfile;
