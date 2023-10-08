import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const NavbarCareer = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <div className="fixed w-full bg-black text-gray-50 shadow-sm">
        <div
          className="
          py-4 
          border-b-[1px]
          border-b-gray-800
        "
        >
          <Container>
            <div
              className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
            >
              <div
                onClick={() => navigate("/careers")}
                className="cursor-pointer flex flex-row gap-1"
              >
                <span className="font-bold">PartyX</span>
                <span className="font-semibold">Careers</span>
              </div>

              <div className="cursor-pointer font-bold">Menus</div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NavbarCareer;
