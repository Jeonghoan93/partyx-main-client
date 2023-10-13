import { BsFilterRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NavbarStandouts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed z-10 w-full bg-white">
      <div
        className="
          p-4
          flex
          flex-col
          gap-3
        "
      >
        <div className="flex flex-row items-center justify-between">
          <span
            onClick={() => navigate("/standouts")}
            className="cursor-pointer text-[20pt] font-extrabold"
          >
            Standouts
          </span>

          <div className="flex flex-row gap-3">
            <span
              onClick={() => alert("Coming soon!")}
              className="cursor-pointer"
            >
              <BsFilterRight size={25} />
            </span>
          </div>
        </div>

        <div className="text-[11pt] text-gray-700 font-semibold">
          <span>Outstanding content from events most relevant to you.</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarStandouts;
