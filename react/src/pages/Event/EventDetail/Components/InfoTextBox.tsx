import { useNavigate } from "react-router-dom";

interface InfoTextBoxProps {
  path: string;
  title: string;
  desc: string;
}
const InfoTextBox: React.FC<InfoTextBoxProps> = ({ path, title, desc }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <span>
        <h2 className="text-[11pt] font-semibold">{title}</h2>
      </span>

      <span>
        <p className="text-[10pt]">{desc}</p>
        <span
          onClick={() => navigate(path)}
          className="cursor-pointer text-blue-500 text-[11pt]"
        >
          read here.
        </span>
      </span>
    </div>
  );
};

export default InfoTextBox;
