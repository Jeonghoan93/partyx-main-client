import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const HeaderCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-gray-50">
      <Container>
        <div className="py-6 flex flex-col gap-6">
          <span
            style={{ maxWidth: "400px" }}
            className="text-[32pt] font-extrabold "
          >
            This might be the one ride of your life
          </span>

          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-[20pt]">LOCATION</span>
              <span
                onClick={() => alert("Not yet!")}
                className="cursor-pointer"
              >
                Search
              </span>
            </div>
          </div>

          <span
            onClick={() => navigate("/careers/positions")}
            className="cursor-pointer"
          >
            Discover all opportunities
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderCareer;
