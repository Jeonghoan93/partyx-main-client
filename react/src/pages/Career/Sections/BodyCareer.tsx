import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const BodyCareer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <Container>
        <div className="py-6 flex flex-col gap-6">
          <span
            style={{ maxWidth: "600px" }}
            className="text-[24pt] font-extrabold "
          >
            WE ARE GOING TO MAKE PARTY EVERYDAY EVERYWHERE
          </span>

          <span className="text-[12pt]">
            Everyone at PartyX has an important part to play. What’s yours going
            to be?
          </span>

          <span
            onClick={() => navigate("/careers/positions")}
            className="cursor-pointer font-semibold text-[14pt] underline"
          >
            LEARN MORE
          </span>
        </div>
      </Container>
    </div>
  );
};

export default BodyCareer;
