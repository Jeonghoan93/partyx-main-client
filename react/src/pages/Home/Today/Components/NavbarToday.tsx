import { formatDate } from "src/utils/formatDate";

const NavbarToday: React.FC = () => {
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
          <span className="text-[16pt] font-extrabold">
            {" "}
            {formatDate(new Date(), {
              full: true,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarToday;
