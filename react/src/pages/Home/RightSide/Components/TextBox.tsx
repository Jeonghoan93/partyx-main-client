interface TextBoxProps {
  text?: string;
}

const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  return (
    <div className="relative w-full bg-white">
      <div
        className="
          pt-2
          pb-1
          flex
          flex-col
          gap-3
        "
      >
        <div className="flex flex-row items-center justify-between">
          <span className="text-[11pt] sm:text-[12pt] font-bold text-gray-400">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
