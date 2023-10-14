import { useNavigate } from "react-router-dom";

const NavbarStandouts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white">
      <div
        className="
          p-3
          flex
          flex-col
          gap-3
        "
      >
        <div className="flex flex-row items-center justify-between">
          <span className="text-[20pt] font-extrabold">Standouts</span>

          <div className="flex flex-row gap-3">
            <span
              onClick={() => navigate("/events")}
              className="cursor-pointer text-[10pt] font-semibold text-gray-700 hover:underline"
            >
              Show more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarStandouts;
