import FriendsList from "./Cards/FriendsList";
import PhoneEmail from "./Cards/PhoneEmail";
import Safety from "./Cards/Safety";
import VerifyId from "./Cards/VerifyId";

const LeftSide: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 col-span-4 mb-3">
        <Safety />
        <PhoneEmail />
        <VerifyId />
        <FriendsList />
      </div>
    </>
  );
};

export default LeftSide;
