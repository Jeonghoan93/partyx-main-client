import { AiOutlineCreditCard, AiOutlineSafety } from "react-icons/ai";
import { BiBookContent, BiMessageSquareDetail } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import LinkBox from "./Components/LinkBox";

const RightSide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3">
      <LinkBox
        icon={<MdOutlineSpaceDashboard size={28} />}
        title="Host Dashboard"
        desc="Manage your events"
        onClick={() => navigate("/host")}
      />
      <LinkBox
        icon={<PiNewspaperClippingBold size={28} />}
        title="Activity"
        desc="Your tickets and booking"
        onClick={() => navigate("/account/activity")}
      />
      <LinkBox
        icon={<BiMessageSquareDetail size={28} />}
        title="Messages"
        onClick={() => navigate("/account/messages")}
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
