interface ProfileHeaderProps {
  onToggleMode: (mode: "edit" | "view") => void;
  mode: "edit" | "view";
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onToggleMode,
  mode,
}) => {
  return (
    <div className="pt-2 flex flex-row justify-evenly relative text-center text-[11pt] font-bold text-gray-400">
      <span
        className={`px-20 sm:px-40 hover:underline cursor-pointer ${
          mode === "edit" ? "text-gray-900" : ""
        }`}
        onClick={() => onToggleMode("edit")}
      >
        Edit
      </span>
      <span className="text-gray-300">/</span>
      <span
        className={`px-20 sm:px-40 hover:underline cursor-pointer ${
          mode === "view" ? "text-gray-900" : ""
        }`}
        onClick={() => onToggleMode("view")}
      >
        View
      </span>
    </div>
  );
};

export default ProfileHeader;
