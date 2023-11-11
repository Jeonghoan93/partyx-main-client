import { useState } from "react";

interface LittleTextBoxProps {
  text: string;
  onClick: () => void;
}

const LittleTextBox: React.FC<LittleTextBoxProps> = ({ text, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  const dynamicStyleDiv = isActive
    ? "bg-green-200 text-green-800" // Styles when active
    : "border-neutral-200 text-neutral-800"; // Default styles

  return (
    <span onClick={handleClick} className="cursor-pointer">
      <div
        className={`py-1 px-3 rounded-xl shadow border-[1px] ${dynamicStyleDiv}`}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <span className="text-[10pt] font-semibold">{text}</span>
      </div>
    </span>
  );
};

export default LittleTextBox;
