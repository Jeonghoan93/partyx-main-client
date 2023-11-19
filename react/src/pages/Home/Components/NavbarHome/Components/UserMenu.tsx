import Avatar from "src/components/Avatar";
import { useCurrentUser } from "src/hooks/useCurrentUser";

interface UserMenuProps {
  toggleOpen: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ toggleOpen }) => {
  const currentUser = useCurrentUser();

  return (
    <span
      onClick={toggleOpen}
      className="
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
    >
      <Avatar src={currentUser?.img} />
    </span>
  );
};

export default UserMenu;
