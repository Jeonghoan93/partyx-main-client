import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import InfoTextBox, { InfoTextBoxProps } from "./InfoTextBox";

interface InfoCardProps {
  title: string;
  infoTexts: InfoTextBoxProps[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, infoTexts: InfoTexts }) => {
  const [showSection, setShowSection] = useState(false);

  return (
    <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
      <section className="flex flex-col gap-3">
        <section className="">
          <div className="flex flex-row items-center justify-between">
            <span>
              <h2 className="text-[13pt] font-bold mb-2">{title}</h2>
            </span>

            <span
              className={showSection ? "hidden" : "cursor-pointer"}
              onClick={() => setShowSection(true)}
            >
              <BiPlus size={20} />
            </span>

            <span
              className={showSection ? "cursor-pointer" : "hidden"}
              onClick={() => setShowSection(false)}
            >
              <BiMinus size={20} />
            </span>
          </div>
        </section>

        {showSection && (
          <section className=" flex flex-col gap-6">
            <hr />
            {InfoTexts.map((info) => (
              <InfoTextBox
                key={info.title}
                title={info.title}
                desc={info.desc}
              />
            ))}
          </section>
        )}
      </section>
    </div>
  );
};

export default InfoCard;
