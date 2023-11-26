import { FaGooglePay } from "react-icons/fa";
import LineContainer from "src/components/LineContainer";

const GooglePayCard = () => {
  return (
    <LineContainer>
      <section className="cursor-pointer flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-2">
          <span className="font-semibold text-[12pt]">Google Pay</span>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <span>
            <FaGooglePay size={30} />
          </span>
        </div>
      </section>
    </LineContainer>
  );
};

export default GooglePayCard;
