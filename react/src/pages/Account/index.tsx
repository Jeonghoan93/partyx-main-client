import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import useLoginModal from "src/hooks/useLoginModal";
import getAccountItems from "./Components/AccountItems";
import { LinkBox } from "./Components/LinkBox";

const Account: React.FC = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  const accountItems = getAccountItems(navigate);
  const LoginModal = useLoginModal();

  return (
    <Container>
      <section style={{ maxWidth: "400px" }} className="px-3">
        <div className="mb-4">
          <div className="flex flex-row items-center justify-between">
            <span className="text-[18pt] font-bold mb-1">
              {currentUser ? currentUser.name : "Account"}
            </span>
            <span className="shadow-sm rounded-full border-[1px] border-neutral-100 ">
              {" "}
              <img
                className="rounded-full"
                height="40"
                width="40"
                alt="Avatar"
                src={currentUser?.img || "/images/placeholder.jpg"}
              />
            </span>
          </div>
          {currentUser ? (
            <div className="flex flex-row gap-1 text-[12pt] text-gray-600 font-normal">
              <span className="font-bold">{currentUser.name}</span>·
              <span>{currentUser.email}</span>·
              <span className="underline cursor-pointer font-semibold">
                Go to profile
              </span>
            </div>
          ) : (
            <span
              onClick={LoginModal.onOpen}
              className="cursor-pointer underline"
            >
              Login to see your account!
            </span>
          )}
        </div>

        {accountItems.map((item, index) => (
          <LinkBox
            key={index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            onClick={item.onClick}
          />
        ))}
      </section>
    </Container>
  );
};

export default Account;
