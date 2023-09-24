import { useState } from "react";
import TextModal from "./TextModal";

export interface InfoTextBoxProps {
  title: string;
  desc: string;
  desc2?: string;
}
const InfoTextBox: React.FC<InfoTextBoxProps> = ({ title, desc, desc2 }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <span>
          <h2 className="text-[11pt] font-semibold">{title}</h2>
        </span>

        <span>
          <p className="text-[10pt]">
            {desc.length > 350 ? desc.slice(0, 350) + "..." : desc}
          </p>
          <p className="text-[10pt] mt-2">
            {desc2 && desc2.length > 350 ? desc2.slice(0, 350) + "..." : desc2}
          </p>
          <span
            onClick={handleOpen}
            className="cursor-pointer text-blue-500 text-[11pt]"
          >
            Read more.
          </span>
        </span>
      </div>

      {open && (
        <TextModal
          title={title}
          desc={desc}
          desc2={desc2}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default InfoTextBox;
