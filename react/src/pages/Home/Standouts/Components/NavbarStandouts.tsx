import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const NavbarStandouts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div
        className="
          py-3
          flex
          flex-col
          gap-3
        "
      >
        <div className="flex flex-row items-center justify-between">
          <span className="text-[14pt] sm:text-[18pt] font-extrabold text-gray-400">
            Standouts
          </span>

          <div className="flex flex-row gap-3">
            <span
              onClick={() => navigate("/events")}
              className="cursor-pointer text-[9pt] sm:text-[10pt] font-semibold text-gray-700 hover:underline"
            >
              Show more
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavbarStandouts;
