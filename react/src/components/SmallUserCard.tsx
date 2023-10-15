interface SmallUserCardProps {
  onClick?: () => void;
  img: string;
  name?: string;
  role?: string;
}

const SmallUserCard: React.FC<SmallUserCardProps> = ({
  onClick,
  img,
  name,
  role,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span onClick={onClick} className="cursor-pointer">
        <img
          className="rounded-full"
          height="40"
          width="40"
          alt="Avatar"
          src={img}
        />
      </span>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-[9pt]">{name}</span>
        <span className="font-semibold text-[7pt] text-gray-600">
          {role || ""}
        </span>
      </div>
    </div>
  );
};

export default SmallUserCard;
