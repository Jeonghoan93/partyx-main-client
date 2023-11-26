import { IoMdTime } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import LineContainer from "src/components/LineContainer";

const ConfirmationInfoCard = () => {
  return (
    <LineContainer>
      <section className="flex flex-col items-start gap-3">
        <div className="py-2">
          <span className="font-bold text-[12pt]">Lai 22 Hostel & Bar</span>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col gap-1 items-center">
            <div className="flex flex-row gap-2 items-center">
              <span>
                <IoMdTime size={22} />
              </span>
              <div className="flex flex-col items-start">
                <span className="font-bold text-gray-600">Start date</span>
                <span>2 Jan, 00:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <div className="flex flex-row gap-2 items-center">
              <span>
                <IoMdTime size={22} />
              </span>
              <div className="flex flex-col items-start">
                <span className="font-bold text-gray-600">End date</span>
                <span>3 Jan, 00:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="flex flex-row gap-2 items-center">
            <span>
              <MdOutlineLocationOn size={22} />
            </span>
            <div className="flex flex-col items-start">
              <span className="font-bold text-gray-600">Address</span>
              <span>Lai 22, Tallinn, Estonia</span>
            </div>
          </div>
        </div>
      </section>
    </LineContainer>
  );
};

export default ConfirmationInfoCard;
