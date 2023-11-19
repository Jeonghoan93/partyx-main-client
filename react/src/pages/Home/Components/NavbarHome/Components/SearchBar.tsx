import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  toggleOpen: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleOpen }) => {
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
      <FiSearch size={22} />
    </span>
  );
};

export default SearchBar;
