import { BiChevronLeft, BiLinkExternal } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import HeartButton from "src/components/HeartButton";
import { useCurrentUser } from "src/hooks/useCurrentUser";
const NavbarPaymentGateway: React.FC = () => {
  const currentUser = useCurrentUser();

  const navigate = useNavigate();

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
              <span className="text-[11pt] font-bold text-gray-800">Back</span>
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="cursor-pointer">
                <BiLinkExternal />
              </span>
              <span>
                <HeartButton currentUser={currentUser} eventId={3} />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavbarPaymentGateway;
