import { FaRegFilePdf } from "react-icons/fa";

const DownloadTicketCard = () => {
  return (
    <div
      className={
        "p-3 bg-gray-100 border-neutral-200 rounded-lg shadow border-[1px] "
      }
    >
      <div className="cursor-pointer flex flex-row gap-2 items-center justify-center">
        <span>
          <FaRegFilePdf size={18} />
        </span>
        <span className="font-bold text-[12pt]">
          Download your ticket in PDF
        </span>
      </div>
    </div>
  );
};

export default DownloadTicketCard;
