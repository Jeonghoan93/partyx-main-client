import { AiOutlineCreditCard, AiOutlineSafety } from "react-icons/ai";
import { BiBook, BiBookContent, BiMessageSquareDetail } from "react-icons/bi";
import { BsPeople, BsPerson } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import { PiBoundingBoxLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import LinkBox from "./Components/LinkBox";

const RightSide: React.FC = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <section className="flex flex-col gap-3">
      <LinkBox
        icon={<BsPerson size={28} />}
        title="Switch to guest"
        onClick={() => navigate("/account")}
      />

      {isMobile && (
        <>
          <LinkBox
            icon={<PiBoundingBoxLight size={28} />}
            title="Listings"
            desc="Past and upcoming events."
            onClick={() => navigate("/host/listings")}
          />
          <LinkBox
            icon={<BsPeople size={28} />}
            title="Guests"
            desc="Past and upcoming guests."
            onClick={() => navigate("/host")}
          />
          <LinkBox
            icon={<CiBoxes size={28} />}
            title="Manage"
            desc="Customize your management."
            onClick={() => navigate("/host")}
          />
        </>
      )}

      <LinkBox
        icon={<BiMessageSquareDetail size={28} />}
        title="Messages"
        onClick={() => navigate("/host/messages")}
      />
      <LinkBox
        icon={<BiBook size={28} />}
        title="Tax"
        desc="Tax details and settings."
        onClick={() => navigate("/host/tax")}
      />
      <LinkBox
        icon={<AiOutlineCreditCard size={28} />}
        title="Payment & Payout"
        desc="Manage payment and payout methods."
        onClick={() => navigate("/host/payments")}
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
