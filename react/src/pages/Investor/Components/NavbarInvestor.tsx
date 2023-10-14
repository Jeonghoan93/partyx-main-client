import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Container from "src/Components/Container";

const NavbarInvestor = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <div className="fixed z-10 w-full bg-black text-gray-50 shadow-sm">
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
                onClick={() => navigate("/investor")}
                className="cursor-pointer flex flex-row gap-1"
              >
                <span className="font-bold">PartyX</span>
                <span className="font-semibold">Investor</span>
              </div>

              <section className="hidden sm:block">
                <div className="flex flex-row text-center gap-6 items-center">
                  <span className="cursor-pointer font-bold text-[10pt] hover:underline">
                    Financials
                  </span>
                  <span className="cursor-pointer font-bold text-[10pt] hover:underline">
                    News and events
                  </span>
                  <span className="cursor-pointer font-bold text-[10pt] hover:underline">
                    Governance
                  </span>
                  <span className="cursor-pointer font-bold text-[10pt] hover:underline">
                    FAQ and resources
                  </span>
                </div>
              </section>

              <section className="block sm:hidden">
                <div>
                  <span onClick={() => {}} className="cursor-pointer">
                    <AiOutlineMenu size={17} />
                  </span>
                </div>
              </section>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NavbarInvestor;
