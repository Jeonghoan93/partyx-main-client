import { useState } from "react";
import TextModal from "./TextModal";

export interface InfoTextBoxProps {
  title: string;
  desc: string[] | string;
}
const InfoTextBox: React.FC<InfoTextBoxProps> = ({ title, desc }) => {
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

        <div>
          {/* Check if desc is an array */}
          {Array.isArray(desc) &&
            desc.map((description, index) => (
              <p key={index} className="text-[10pt] mt-2">
                {description.length > 350
                  ? description.slice(0, 350) + "..."
                  : description}
              </p>
            ))}

          {/* Check if desc is a single string */}
          {typeof desc === "string" && (
            <p className="text-[10pt] mt-2">
              {desc.length > 350 ? desc.slice(0, 350) + "..." : desc}
            </p>
          )}

          <span
            onClick={handleOpen}
            className="cursor-pointer text-blue-500 text-[11pt]"
          >
            Read more.
          </span>
        </div>
      </div>

      {open && (
        <TextModal title={title} desc={desc} handleClose={handleClose} />
      )}
    </>
  );
};

export default InfoTextBox;
