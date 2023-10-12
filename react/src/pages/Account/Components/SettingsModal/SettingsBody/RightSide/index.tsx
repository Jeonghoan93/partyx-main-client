import { AiOutlineCreditCard, AiOutlineSafety } from "react-icons/ai";
import { BiBook, BiBookContent } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import LinkBox from "./Components/LinkBox";

const RightSide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3">
      <LinkBox
        icon={<BiBook size={28} />}
        title="Tax"
        desc="Tax details and settings."
        onClick={() => navigate("/account/tax")}
      />
      <LinkBox
        icon={<AiOutlineCreditCard size={28} />}
        title="Payment & Payout"
        desc="Manage payment and payout methods."
        onClick={() => navigate("/account/payments")}
      />
      <LinkBox
        icon={<AiOutlineSafety size={28} />}
        title="Your Safety"
        desc="Trusted organizations to help keep you safe and well"
        onClick={() => alert("Not yet")}
      />

      <LinkBox
        icon={<GrSecure size={28} />}
        title="Login & Security"
        desc="Change password, set up 2FA and more."
        onClick={() => alert("Not yet")}
      />

      <LinkBox
        icon={<BiBookContent size={28} />}
        title="What works"
        desc="Learn more about what works and what doesn't."
        onClick={() => alert("Not yet")}
      />
    </section>
  );
};

export default RightSide;
