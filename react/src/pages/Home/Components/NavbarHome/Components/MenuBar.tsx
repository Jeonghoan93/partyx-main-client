import { AiOutlineMenu } from "react-icons/ai";

interface MenuBarProps {
  toggleOpen: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleOpen }) => {
  return (
    <span
      onClick={toggleOpen}
      className="
          p-1
          border-[1px] 
          border-neutral-50 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
    >
      <AiOutlineMenu size={22} />
    </span>
  );
};

export default MenuBar;
