import { AiOutlineCreditCard, AiOutlineSafety } from "react-icons/ai";
import { BiBookContent, BiMessageSquareDetail } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiNewspaperClippingBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import LinkBox from "./Cards/LinkBox";
import SubmitCard from "./Cards/SubmitCard";

const RightSide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3">
      <SubmitCard />
    </section>
  );
};

export default RightSide;
