import Container from "src/components/Container";
import { formatDate } from "src/utils/formatDate";

const NavbarToday: React.FC = () => {
  return (
    <Container>
      <div className="relative w-full bg-white">
        <div
          className="
          py-3
          flex
          flex-col
          gap-3
        "
        >
          <div className="flex flex-row items-center justify-between">
            <span className="text-[12pt] sm:text-[16pt] font-extrabold text-gray-400">
              {" "}
              {formatDate(new Date(), {
                full: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavbarToday;
