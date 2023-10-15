import CompleteProfile from "./Cards/CompleteProfile";
import ContactFestival from "./Cards/ContactFestival";
import VerifyId from "./Cards/VerifyId";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <ContactFestival />
      <CompleteProfile />
      <VerifyId />
    </div>
  );
};

export default LeftSide;
