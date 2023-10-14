import LineContainer from "src/Components/LineContainer";

interface LinkBoxProps {
  icon: React.ReactNode;
  title: string;
  desc?: string;
  onClick: () => void;
}
const LinkBox: React.FC<LinkBoxProps> = ({ icon, title, desc, onClick }) => {
  return (
    <LineContainer>
      <div
        onClick={onClick}
        className="flex flex-row items-center gap-3 cursor-pointer"
      >
        <span>{icon}</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12pt] font-bold">{title}</span>
          <span className="text-[9pt] font-semibold text-gray-700">{desc}</span>
        </div>
      </div>
    </LineContainer>
  );
};

export default LinkBox;
