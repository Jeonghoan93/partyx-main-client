interface ProfileHeaderProps {
  onToggleMode: (mode: "upcoming" | "past") => void;
  mode: "upcoming" | "past";
}

const UpcomingPastHeader: React.FC<ProfileHeaderProps> = ({
  onToggleMode,
  mode,
}) => {
  return (
    <div className="pt-2 flex flex-row justify-evenly relative text-center text-[11pt] font-bold text-gray-400">
      <span
        className={`pr-20 sm:pr-40 hover:underline cursor-pointer ${
          mode === "upcoming" ? "text-gray-900" : ""
        }`}
        onClick={() => onToggleMode("upcoming")}
      >
        Upcoming
      </span>
      <span className="text-gray-300">/</span>
      <span
        className={`pl-20 sm:pl-40 hover:underline cursor-pointer ${
          mode === "past" ? "text-gray-900" : ""
        }`}
        onClick={() => onToggleMode("past")}
      >
        Past
      </span>
    </div>
  );
};

export default UpcomingPastHeader;
