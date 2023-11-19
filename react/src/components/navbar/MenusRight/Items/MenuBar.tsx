import { AiOutlineMenu } from "react-icons/ai";

interface MenuBarProps {
  toggleOpen: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ toggleOpen }) => {
  return (
    <div
      onClick={toggleOpen}
      className="
          p-2
          border-[2px] 
          border-neutral-100 
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
      <AiOutlineMenu size={20} />
    </div>
  );
};

export default MenuBar;
