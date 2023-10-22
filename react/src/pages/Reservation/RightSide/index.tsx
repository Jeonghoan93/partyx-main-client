import { MdFreeCancellation } from "react-icons/md";
import { TbExchange } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ReservationProps } from "..";
import LinkBox from "./Components/LinkBox";

const RightSide: React.FC<ReservationProps> = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-3">
      <LinkBox
        icon={<MdFreeCancellation size={28} />}
        title="Request Cancellation"
        desc="You will be refunded based on policy"
        onClick={() => navigate("/account/activity")}
      />
      <LinkBox
        icon={<TbExchange size={28} />}
        title="Manage booking"
        onClick={() => navigate("/account/messages")}
      />
    </section>
  );
};

export default RightSide;
