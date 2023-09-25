import { BiSearch } from "react-icons/bi";
import useLoginModal from "src/hooks/useLoginModal";

const Search = () => {
  const loginModal = useLoginModal();

  return (
    <div
      onClick={loginModal.onOpen}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
     
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          Search
        </div>

        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div
            className=" 
            text-sm 
            font-semibold 
            pl-3 
            border-l-[1px] 
            flex-1 
            text-center 
            "
          >
            People
          </div>
          <div
            className="
              p-2 
              bg-gray-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
