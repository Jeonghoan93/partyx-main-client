import { useState } from "react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import LineContainer from "src/components/LineContainer";

interface CardPaymentCardProps {
  isLoading?: boolean;
  onSubmit?: () => Promise<void>;
}

const CardPaymentCard: React.FC<CardPaymentCardProps> = ({
  isLoading = false,
  onSubmit = () => {},
}) => {
  const [show, setShow] = useState(false);

  return (
    <LineContainer>
      <section
        onClick={() => setShow(!show)}
        className="cursor-pointer flex flex-row justify-between items-center "
      >
        <div className="flex flex-row gap-2">
          <span className="font-semibold text-[12pt]">
            Credit card or debit card
          </span>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <span>
            <FaCcVisa size={30} />
          </span>
          <span>
            <FaCcMastercard size={30} />
          </span>
          <span>
            <SiAmericanexpress size={26} />
          </span>
        </div>
      </section>

      {show && (
        <section className="mt-5 cursor-pointer flex flex-col gap-3">
          <hr />

          <div className="flex flex-col gap-2 items-start">
            <span className="font-semibold text-[12pt]">Card number</span>

            <input
              className="w-full h-[40px] border-[1px] rounded-lg p-3"
              placeholder="1234 1234 1234 1234"
            />
          </div>

          <div className="flex flex-row gap-3 w-full">
            <div className="flex flex-col gap-2 items-start">
              <span className="font-semibold text-[12pt]">Expiration date</span>

              <input
                className="w-full h-[40px] border-[1px] rounded-lg p-3"
                placeholder="MM / YY"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <span className="font-semibold text-[12pt]">CVV code</span>

              <input
                className="w-full h-[40px] border-[1px] rounded-lg p-3"
                placeholder="CVC"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <span className="font-semibold text-[12pt]">Cardholder name</span>

            <input
              className="w-full h-[40px] border-[1px] rounded-lg p-3"
              placeholder="Name on card"
            />
          </div>

          <div
            className={
              "mt-3 p-2 bg-gray-100 border-neutral-200 rounded-lg shadow border-[1px]"
            }
          >
            <div onClick={onSubmit} className="text-center cursor-pointer">
              <button disabled={isLoading} className="font-bold">
                Continue
              </button>
            </div>
          </div>
        </section>
      )}
    </LineContainer>
  );
};

export default CardPaymentCard;
