import Avatar from "src/components/Avatar";
import { User } from "src/interfaces/user";

interface UserMenuProps {
  currentUser?: User | null;
  toggleOpen: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser, toggleOpen }) => {
  return (
    <div
      onClick={toggleOpen}
      className="
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
    >
      <div className="hidden md:block">
        <Avatar src={currentUser?.img} />
      </div>
    </div>
  );
};

export default UserMenu;
