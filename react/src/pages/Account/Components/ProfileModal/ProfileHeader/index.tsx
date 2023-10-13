const ProfileHeader = () => {
  return (
    <div className="pt-2 flex flex-row justify-evenly relative text-center text-[11pt] font-bold text-gray-500">
      <span className="px-20 sm:px-40 hover:underline cursor-pointer">
        Edit
      </span>
      <span className="text-gray-300">/</span>
      <span className="px-20 sm:px-40 hover:underline cursor-pointer">
        View
      </span>
    </div>
  );
};

export default ProfileHeader;
